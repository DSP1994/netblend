import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import appStyles from '../../App.module.css'
import ImageSpinner from '../../app_components/ImageSpinner'
import Profile from './Profile'
import { useProfileData } from '../../contexts/ProfileDataContext'

const PopularProfiles = ({mobile}) => {
  const {popularProfiles} = useProfileData();

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
                <Profile key={profile.id} profile={profile} mobile />
                ))}              
            </div>
          ) : (popularProfiles.results.map((profile) => (
                <Profile key={profile.id} profile={profile}/>
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