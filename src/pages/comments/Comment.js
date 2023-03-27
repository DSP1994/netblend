import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../app_components/Avatar'
import { OwnerDropdown } from '../../app_components/OwnerDropdown'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import styles from '../../design/Comment.module.css'

const Comment = (props) => {
    const {
        profile_id, 
        profile_image, 
        owner, updated_at, 
        content,
        id,
        setPost,
        setComments,
    } = props;

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;

  return (
    <div>
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} />
            </Link>
            <Media.Body className='align-self-center ml-2'>
                <span className={styles.Owner}>{owner}</span>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p>
            </Media.Body>
            {is_owner && (
                <OwnerDropdown handleEdit={() => {}} handleDelete={() => {}}/>
            )}
        </Media>
    </div>
  )
}

export default Comment