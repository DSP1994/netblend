import React, { useState } from 'react'
import upload_image from '../../design/upload_image.jpg'

import btnStyles from '../../design/Button.module.css'
import appStyles from '../../App.module.css'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'

function UploadCreateForm(){
    const [error, setErrors] = useState({})
}

const UploadForm = () => {
  return (
    <Form>
        <Row>
            <Col className='py-2 p-0 p-md-2' md={8} lg={8}>
                <Container
                    className={`${appStyles.Content} d-flex flex-column justify-content-center`}
                >
                    <Form.Group>
                        <Form.Label
                            className='d-flex justify-content-center'
                            htmlFor='image-upload'
                        >Image
                        </Form.Label>
                    </Form.Group>
                    <div className='d-md-none'>{textfields}</div>
                </Container>
            </Col>
            <Col md={4} lg={4} className='d-none d-md-block p-0 p-md-2'>
                <Container className={appStyles.Content}>{textfields}</Container>
            </Col>
        </Row>
    </Form>
  )
}

export default UploadForm