import React, {useEffect, useState} from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ImageSpinner from '../../app_components/ImageSpinner';
import styles from '../../design/ProfilePage.module.css';
import appStyles from '../../App.module.css'
import btnStyles from '../..styles/Button.module.css'
import PopularProfiles from './PopularProfiles';
import { useCurrentUser } from '../../contexts/CurrentUserContext';


function ProfilePage() {
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage