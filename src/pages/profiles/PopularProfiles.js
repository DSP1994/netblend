import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { axiosReq } from '../../netblend_api/axiosDefaults'
import appStyles from '../../App.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import ImageSpinner from '../../app_components/ImageSpinner'

const PopularProfiles = ({mobile}) => {
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
    <Container className={`${appStyles.Content} ${
      mobile && 'd-lg-none text-center mb-3'
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p>Pop Profs</p>
          {mobile ? (
            <div className='d-flex justify-content-around'>
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
                ))}              
            </div>
          ) : (popularProfiles.results.map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
            ))
          )}
        </>
        ) : (
          <ImageSpinner spinner />
        )}
    </Container>
  )
}

export default PopularProfiles;