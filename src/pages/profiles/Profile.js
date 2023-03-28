import React from 'react'
import styles from '../../design/Profile.module.css'
import btnStyles from '../../design/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../app_components/Avatar';
import { Button } from 'react-bootstrap';

const Profile = (props) => {
    const {profile, mobile, imageSize=55} = props;
    const {id, following_id, image, owner} = profile;

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
            {!mobile && currentUser && !is_owner && (
                following_id ? (
                    <Button 
                    className={`${btnStyles.Button}`}
                    onClick={() => {}}
                    >unfollow</Button>
                ) : (
                    <Button
                    className={`${btnStyles.Button}`}
                    onClick={() => {}}
                    >follow</Button>
                )
            )}
        </div>
    </div>

}

export default Profile