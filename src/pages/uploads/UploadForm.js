import React, { useReq, useRef, useState } from 'react'
import upload_image from '../../images/upload_image.jpg'

import styles from '../../design/UploadForm.module.css'
import btnStyles from '../../design/Button.module.css'
import appStyles from '../../App.module.css'
import ImageSpinner from '../../app_components/ImageSpinner'
import { Row, Col, Container, Button, Form, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const UploadForm = () => {
    const [error, setErrors] = useState({})

    const [uploadData, setUploadData] = useState({
        caption: '',
        description: '',
        image: '',
    });
    const {caption, description, image} = uploadData;

    const uploadInput = useRef(null)
    const history = useHistory();

    const handleChange = (event) => {
        setUploadData({
            ...uploadData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeUpload = (event) => {
        if (event.target.files.length){
            URL.revokeObjectURL(image)
            setUploadData({
                ...uploadData,
                image: URL.createObjectURL(event.target.files[0])
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append('caption', caption)
        formData.append('description', description)
        formData.append('image', ImageInput.current.files[0])

        try {
            const {data} = await axiosReq.post('/photos/', formData);
            history.push(`/photos/${data.id}`)
        } catch (error) {
            console.log(error)
            if (error.response?.status !== 401){
                setErrors(error.response?.data)
            }
        }
    }

    const textfields = (
        <div className='text-center'>
            <Form.Group>
                <Form.Label>Caption</Form.Label>
                <Form.Control
                    type='text'
                    name='caption'
                    value={caption}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={4}
                    name='description'
                    value={description}
                    onChange={handleChange}
                />
            </Form.Group>
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
    <Form onSubmit={handleSubmit}>
        <Row>
            <Col className='py-2 p-0 p-md-2' md={8} lg={8}>
                <Container
                    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                >
                    <Form.Group className='text-center'>
                        {image ? (
                            <>
                                <figure>
                                    <Image className={appStyles.Image} src={image} rounded />
                                </figure>
                                <div>
                                    <Form.Label
                                        className={`${btnStyles.Button} btn`}
                                        htmlFor='image-upload'
                                    >
                                        Change Upload
                                    </Form.Label>
                                </div>
                            </>
                        ) : (
                            <Form.Label
                                className='d-flex justify-content-center'
                                htmlFor='image-upload'
                            >
                                <ImageSpinner src={upload_image} message='tap me to upload your goodness' />
                            </Form.Label>                            
                        )}

                        <Form.File
                            id='image-upload'
                            accept='image/*'
                            onChange={handleChangeUpload}
                            ref={uploadInput}
                        />
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