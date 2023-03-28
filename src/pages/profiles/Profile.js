import React from 'react'
import styles from '../../design/Profile.module.css'
import btnStyle from '../../design/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
    const {profile, mobile, imageSize=55} = props;
    const {id, follwing_id, image, owner} = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
  return (
    <div>

    </div>
  )
}

export default Profile