import React from 'react'
import { Container, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Avatar from '../../app_components/Avatar';
import OwnerDropdown from '../../app_components/OwnerDropdown';

function Event() {
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

export default Event