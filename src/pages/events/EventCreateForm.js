import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

function EventCreateForm() {
  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Time</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Cost</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Label>Event Url</Form.Label>
                <Form.Control />
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