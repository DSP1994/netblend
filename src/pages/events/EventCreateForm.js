import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../netblend_api/axiosDefaults';

function EventCreateForm() {
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

    const handleChange = (event) => {
        setEventData({
            ...eventData,
            [event.target.name]: event.target.value,
        });
    };

    const handeSubmit = async(event) => {
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
            const {data} = await axiosReq.post('/events/', formData);
            history.push(`/events/${data.id}`);
        } catch (error) {
            if (error.response?.status !== 401){
                setErrors(error.response?.data);
            }
        }
    };

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
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
            <hr />
            <Row>
                <Button>
                    Confirm
                </Button>
                <Button>
                    Cancel
                </Button>
            </Row>
            <hr />
        </Form>
    </Container>
  )
}

export default EventCreateForm