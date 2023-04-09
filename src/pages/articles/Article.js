import React from 'react';
import { Col, Container, Media } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../app_components/Avatar';
import styles from '../../design/Article.module.css'
import appStyles from '../../App.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
// import appStyles from '../../App.module.css'
import { OwnerDropdown } from '../../app_components/OwnerDropdown';
import {axiosRes} from '../../netblend_api/axiosDefaults';
// import ArticlePage from './ArticlePage';

function Article(props) {
    const {id, owner, title, content, created_on,
        modified_on, profile_id, profile_image, articlePage
     } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
      history.push(`/article/${id}/edit`);
    };

    const handleDelete = async () => {
      try {
        await axiosRes.delete(`/article/${id}/`);
        history.goBack();
      } catch (error) {
        // console.log(error)
      }
    }

  return (
    <Container className={`${appStyles.Container} ${styles.Article}`}>
      <br />
      <Media className='align-items-center justify-content-between'>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={55}/>
          {owner}      
        </Link>
        <div className='d-flex align-items-center'>
          {is_owner && articlePage && (
          <OwnerDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
            )}              
        </div>   
      </Media> 

      <Col className={styles.TextContent}>
        <Link to={`/article/${id}`}>
          <h2>
            <strong>{title}</strong>
          </h2>          
        </Link>
        <br />
        <p>{content}</p>
        <p>{created_on}</p>
        <p>{modified_on}</p>
      </Col>
      <br />
    </Container>
  )
}

export default Article