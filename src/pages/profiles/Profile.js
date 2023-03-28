import React from 'react'
import styles from '../../design/Profile.module.css'
import btnStyle from '../../design/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../app_components/Avatar';

const Profile = (props) => {
    const {profile, mobile, imageSize=55} = props;
    const {id, follwing_id, image, owner} = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
  return <div
    className={`my-3 d-flex align-items-center ${mobile && 'flex-colum'}`}
    >
        <div>
            <Link className='align-self-center' to={`/profiles/${id}/}`}>
                <Avatar src={image} height={imageSize} />
            </Link>
        </div>
        <div className={`mx-2 ${styles.WordBreak}`}>
            <strong>{owner}</strong>
        </div>
        <div className={`text-right ${!mobile && 'ml-auto'}`}>
            {!mobile && currentUser && !is_owner}
        </div>
    </div>

}

export default Profile