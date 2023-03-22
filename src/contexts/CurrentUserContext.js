import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { axiosRes } from '../netblend_api/axiosDefaults';
import { response } from 'msw';
import { useHistory } from 'react-router-dom';

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)

export const CurrentUserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  const handleMount = async () => {
    try {
      const {data} = await axiosRes.get('dj-rest-auth/user/')
      setCurrentUser(data) 
    } catch (error) {}
  }

  useEffect(() => {
    handleMount()
  }, []);

  useMemo(() => {
    axiosRes.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401){
          try {
            await axios.post('/dj-rest-auth/token/refresh/')
          } catch (error) {
            setCurrentUser(prevCurrentUser => {
              if (prevCurrentUser){
                history.push("/signin")
              }
              return null
            })
          }
          return axios(error.config)
        }
        return Promise.reject(error)
      }
    )
  })

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
    
  )
};