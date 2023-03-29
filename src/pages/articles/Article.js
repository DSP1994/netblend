import React from 'react';
import { Col, Container, Media } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../app_components/Avatar';
import styles from '../../design/Article.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
// import appStyles from '../../App.module.css'
import { OwnerDropdown } from '../../app_components/OwnerDropdown';
import {axiosRes} from '../../netblend_api/axiosDefaults';
import ArticlePage from './ArticlePage';

function Article(props) {
    const [
        id, owner, title, content, created_on,
        modified_on, profile_id, profile_image,
    ] = props;

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
        console.log(error)
      }
    }

  return (
    <Container className={styles.Container}>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={55}/>
          {owner}
        </Link>
        {is_owner && ArticlePage && (
          <OwnerDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
           )}        
      </Media>

      <Col>
        <Link to={`article/${id}`}>
          <img alt={title}/>
        </Link>
        <hr />
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{created_on}</p>
        <p>{modified_on}</p>
      </Col>
      <hr />
    </Container>
  )
}

export default Article