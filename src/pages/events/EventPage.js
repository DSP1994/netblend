import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Event from './Event';

function EventPage() {
    const {id} = useParams();
    const [event, setEvent] = useState({results: []});

  return (
    <Container>
        <Event />
    </Container>
  )
}

export default EventPage