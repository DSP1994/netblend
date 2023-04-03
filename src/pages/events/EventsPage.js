import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocation } from 'react-router-dom';
import { axiosReq } from '../../netblend_api/axiosDefaults';

function EventsPage({message, filter = ''}) {
    const [events, setEvents] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchEvents = aysnc () => {
            try {
                const {data} = await axiosReq.get(`/events/?${filter}search=${query}`);
                setEvents(data);
                setHasLoaded(true)
            } catch (error) {
                console.log(error)
            }
        };

        setHasLoaded(false);

        const timer = setTimeout(() => {
            fetchEvents();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname])

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