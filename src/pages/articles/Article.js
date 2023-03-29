import React from 'react';
import { Col, Container, Media } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../app_components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function Article(props) {
    const [
        id, owner, is_owner, title, content, created_on,
        modified_on, profile_id, profile_image,
    ] = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

  return (
    <Container>
      <hr />
      <Media>
        <Link>
          <Avatar />
          <h2></h2>
          <p></p>
        </Link>
      </Media>

      <Col>
        <Link>
          <img />
        </Link>
        <hr />
        <h2>Title</h2>
        <p>content</p>
        <p>updated on</p>
      </Col>
      <hr />
    </Container>
  )
}

export default Article