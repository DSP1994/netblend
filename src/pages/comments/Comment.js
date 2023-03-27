import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../app_components/Avatar'
import { OwnerDropdown } from '../../app_components/OwnerDropdown'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import styles from '../../design/Comment.module.css'
import { axiosRes } from '../../netblend_api/axiosDefaults'

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

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)
            setPost(prevPost => ({
                results: [{
                    ...prevPost.results[0],
                    comments_count: prevPost.results[0].comments_count - 1
                }]
            }))

            setComments(prevComments => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }))
        } catch (error) {
            
        }
    }

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
                <OwnerDropdown handleEdit={() => {}} handleDelete={handleDelete}/>
            )}
        </Media>
    </div>
  )
}

export default Comment