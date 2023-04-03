import React from 'react'
import { Container, Form } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'

function EventsPage() {
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