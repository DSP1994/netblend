import React, { useState } from 'react'
import upload_image from '../../images/upload_image.jpg'

import styles from '../../design/UploadForm.module.css'
import btnStyles from '../../design/Button.module.css'
import appStyles from '../../App.module.css'
import ImageSpinner from '../../app_components/ImageSpinner'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'


const UploadForm = () => {
    const [error, setErrors] = useState({})

    const textfields = (
        <div className='text-center'>
            <Button
                className={`${btnStyles.Button}`}
                onClick={() => {}}
            >Restart
            </Button>
            <Button
                className={`${btnStyles.Button}`}
                type='submit'
            >Upload
            </Button>
        </div>   
    )

  return (
    <Form>
        <Row>
            <Col className='py-2 p-0 p-md-2' md={8} lg={8}>
                <Container
                    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                >
                    <Form.Group>
                        <Form.Label
                            className='d-flex justify-content-center'
                            htmlFor='image-upload'
                        >
                            <ImageSpinner src={upload_image} message='tap me to upload your goodness' />
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

export default UploadForm;