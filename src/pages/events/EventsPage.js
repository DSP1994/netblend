import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocation } from 'react-router-dom';
import ImageSpinner from '../../app_components/ImageSpinner';
import { axiosReq } from '../../netblend_api/axiosDefaults';
import { fetchMoreData } from '../../utils/utils';
import Event from './Event';
import PopularProfiles from '../profiles/PopularProfiles';

function EventsPage({message, filter = ''}) {
    const [events, setEvents] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
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
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <PopularProfiles mobile /> 
            <div>
                <Form onSubmit={(event) => event.preventDefault()}>
                    <Form.Control 
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type='text'
                        placeholder='search events'
                        aria-label='search events'
                    />
                </Form>
            </div>
            {hasLoaded ? (
                <>
                    {events.results.length ? (
                        <InfiniteScroll 
                            children={events.results.map((event) => (
                                <Event key={event.id} {...event} setEvents={setEvents} />
                            ))}
                            dataLength={events.results.length}
                            loader={<ImageSpinner spinner />}
                            hasMore={!!events.next}
                            next={() => fetchMoreData(events, setEvents)}
                        />
                    ) : (
                        <Container>
                            <ImageSpinner message={message} />
                        </Container>
                    )}
                </>
            ) : (
                <Container>
                    <ImageSpinner spinner />
                </Container>
            )}
        </Col>
        <Col md={4} className='d-none d-lg-block p-0 p-lg-2'>
            <PopularProfiles />
        </Col>           
    </Row>
  );
}

export default EventsPage