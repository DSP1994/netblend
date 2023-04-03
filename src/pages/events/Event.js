import React from 'react'
import { Container, Media } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext';

import Avatar from '../../app_components/Avatar';
import OwnerDropdown from '../../app_components/OwnerDropdown';

function Event(props) {
const {id, owner, profile_id, profile_image, created_on,
    modified_on, title, content, date, time, city,
    country, price, event_link, eventPage, } = props;

const currentUser = useCurrentUser();
const is_owner = currentUser?.username === owner;
const history = useHistory();

  return (
    <Container>
        <Link>

        </Link>
        <Media>
            <Link>
                <Avatar />
                <p></p>
            </Link>
            <OwnerDropdown />
        </Media>
        <p>Content</p>
        <p>Location</p>
        <p>Data/Time/Price</p>
        <p>More Info Page</p>        
    </Container>
  )
}

export default Event;