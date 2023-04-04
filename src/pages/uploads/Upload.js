import React from 'react'
import styles from '../../design/Post.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Card, Media, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Avatar from '../../app_components/Avatar'
import { axiosRes } from '../../netblend_api/axiosDefaults'
import { OwnerDropdown } from '../../app_components/OwnerDropdown'


const Upload = (props) => {
    const {
        id, owner, profile_id, profile_image, 
        comments_count, likes_count, like_id, 
        title, content, image, updated_at,
        postPage, setPosts
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;
    console.log(is_owner)
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/posts/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`)
            history.goBack();
        } catch (error) {
            console.log(error)
        }
    }

    const handleLike = async () => {
        try {
            const {data} = await axiosRes.post('/likes/', {post:id});
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                    ? {...post, likes_count: post.likes_count + 1, like_id: data.id}
                    :post;
                })
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}`);
            setPosts((prevPosts)=> ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                    ? {...post, likes_count: post.likes_count - 1, like_id: null }
                    : post;
                }),
            }));
        } catch (error) {
            console.log(error)
        }
    }

  return <Card className={`${styles.Post} ${styles.TextContent}`}>
    <Card.Body>
        <Media className='align-items-center justify-content-between'>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55}/>
                {owner}
            </Link>
            <div className='d-flex align-items-center'>
                <span>{updated_at}</span>
                {is_owner && postPage && (
                    <OwnerDropdown 
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    />
                )}
            </div>
        </Media>
    </Card.Body>
    <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title}/>
    </Link>
    <Card.Body>
        {title && <Card.Title className='text-center'>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
            {is_owner ? (
                <OverlayTrigger placement='top' overlay={<Tooltip>Vain! Get your friends to like it!</Tooltip>}>
                    <i className='far fa-heart' />
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={handleUnlike}>
                    <i className={`fas fa-heart ${styles.Heart}`} />
                </span>
            ) : currentUser ? (
                <span onClick={handleLike}>
                    <i className={`far fa-heart ${styles.HeartOutline}`} />
                </span>
            ) : (
                <OverlayTrigger placement='top' overlay={<Tooltip>Tasty huh..! Log in to like it!</Tooltip>}>
                    <i className='far fa-heart' />
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