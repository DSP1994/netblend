import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../netblend_api/axiosDefaults';
import {useRedirect} from '../../hooks/useRedirect';
import btnStyles from '../../design/Button.module.css';
import appStyles from '../../App.module.css';
import styles from '../../design/EventForm.module.css'

function EventEditForm() {
    useRedirect('loggedout');
    const [errors, setErrors] = useState();

    const [eventData, setEventData] = useState({
        title: '',
        content: '',
        date: '',
        time: '',
        city: '',
        country: '',
        price: '',
        event_link: '',
    })
    
    const {title, content, date, time, city, country, price, event_link,} = eventData;

    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/events/${id}/`);
                const {title, content, date, time, city, country, price, event_link, is_owner} = data;

                is_owner ? setEventData({
                    title, content, date, time, city, country, price, event_link
                }) : history.push('/');
            } catch (error) {
                // console.log(error)
            }
        };
        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);
        formData.append('date', date);
        formData.append('time', time);
        formData.append('city', city);
        formData.append('country', country);
        formData.append('price', price);
        formData.append('event_link', event_link);

        try {
            const {data} = await axiosReq.put(`/events/${id}/`, formData);
            history.push(`/events/${data.id}`);
        } catch (error) {
            if (error.response?.status !== 401){
                setErrors(error.response?.data);
            }
        }
    };

  return (
    <Row>
        <Col className='py-2 p-0 p-md-2' md={10} lg={10}>
            <Container className={`${appStyles.Content} ${styles.Container}`}>
                <br />
                <h1 className='text-center'>
                    <strong>Edit your Event!</strong>
                </h1>
                <Form onSubmit={handleSubmit} className='text-center'>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type='text'
                            name='title'
                            value={title}
                            onChange={handleChange}
                            aria-label='title'
                        />
                    </Form.Group>
                    {errors?.title?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            type='text'
                            name='content'
                            value={content}
                            onChange={handleChange}
                            aria-label='content'
                            rows={8}
                        />
                    </Form.Group>
                    {errors?.content?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type='text'
                            name='city'
                            value={city}
                            onChange={handleChange}
                            aria-label='city'
                        />
                    </Form.Group>
                    {errors?.city?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control 
                            type='text'
                            name='country'
                            value={country}
                            onChange={handleChange}
                            aria-label='country'
                        />
                    </Form.Group>
                    {errors?.country?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                            type='date'
                            name='date'
                            value={date}
                            onChange={handleChange}
                            aria-label='date'
                        />
                    </Form.Group>
                    {errors?.date?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control 
                            type='time'
                            name='time'
                            value={time}
                            onChange={handleChange}
                            aria-label='time'
                        />
                    </Form.Group>
                    {errors?.time?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>Cost</Form.Label>
                        <Form.Control 
                            type='text'
                            name='price'
                            value={price}
                            onChange={handleChange}
                            aria-label='price'
                        />
                    </Form.Group>
                    {errors?.price?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}            
                    <Form.Group>
                        <Form.Label>Event Url</Form.Label>
                        <Form.Control 
                            type='url'
                            name='event_link'
                            value={event_link}
                            onChange={handleChange}
                            aria-label='event url'
                        />              
                    </Form.Group>
                    {errors?.event_link?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}              
                    <br />
                    <Row>
                        <Button type='submit' className={btnStyles.Button}>
                            Edit
                        </Button>
                        <Button onClick={() => history.goBack()} className={btnStyles.Button}>
                            Cancel
                        </Button>
                    </Row>
                    <br />
                </Form>
            </Container>
        </Col>
    </Row>
  )
}

export default EventEditForm