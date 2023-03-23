import React from 'react'
import styles from '../../design/Upload.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../app_components/Avatar'


const Upload = (props) => {
    const {
        id, owner, profile_id, profile_image, 
        comments_count, likes_count, like_id, 
        title, content, image, updated_at,
        uploadPage,
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner
  return <Card className={styles.Upload}>
    <Card.Body>
        <Media className='align-items-center justify-content-between'>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55}/>
                {owner}
            </Link>
            <div className='d-flex align-items-center'>
                <span>{updated_at}</span>
                {is_owner && uploadPage && '...'}
            </div>
        </Media>
    </Card.Body>
    <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title}/>
    </Link>
    <Card.Body>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.UploadBar}>
            {is_owner ? (
                <OverlayTrigger placement='top' overlay={<Tooltip>Vain! Get your friends to like it!</Tooltip>}>
                    <i className='far fa-heart' />
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={()=>{}}>
                    <i className={`fas fa-heart ${styles.Heart}`} />
                </span>
            ) : currentUser ? (
                <span onClick={()=>{}}>
                    <i className={`far fa-heart ${styles.HeartOutline}`} />
                </span>
            ) : (
                <OverlayTrigger placement='top' overlay={<Tooltip>Tasty huh..! Log in to like it!</Tooltip>}>
                    <I className='far fa-heart' />
                </OverlayTrigger>
            )}
            {likes_count}
            <Link to={`/posts/${id}`}>
                <i className='far fa-comments' />
            </Link>
            {comments_count}
        </div>
    </Card.Body>
  </Card>
}

export default Upload;