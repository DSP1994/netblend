import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { axiosReq } from '../../netblend_api/axiosDefaults'
import appStyles from '../../App.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'

const PopularProfiles = () => {
  const [profileData, setProfileData] = useState({
    // pageProfile: { results; []},
    popularProfiles:  {results: []},
  });

  const {popularProfiles} = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const{data} = await axiosReq.get(
          '/profiles/?ordering=-followers_count'
        );
        setProfileData(prevState => ({
          ...prevState,
          popularProfiles: data,
        }))
      } catch (error) {
        console.log(error)
      }
    };
    
    handleMount()
  }, [currentUser])

  return (
    <Container className={appStyles.Content}>
        <p>Pop Profs</p>
    </Container>
  )
}

export default PopularProfiles;