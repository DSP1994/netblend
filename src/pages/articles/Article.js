import React from 'react';
import { useHistory } from 'react-router-dom';
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
    <div>Article</div>
  )
}

export default Article