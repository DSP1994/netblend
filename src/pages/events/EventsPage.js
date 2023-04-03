import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocation } from 'react-router-dom';

function EventsPage({message, filter = ''}) {
    const [events, setEvents] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();
    const [query, setQuery] = useState('');

  return (
    <Container>
        <div>
            <Form>
                <Form.Control />
            </Form>
        </div>
        <p>Loaded, or no?
            <InfiniteScroll />
        </p>
    </Container>
  )
}

export default EventsPage