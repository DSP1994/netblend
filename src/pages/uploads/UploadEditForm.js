import React, { useEffect, useRef, useState } from 'react'
import upload_image from '../../images/upload_image.jpg'

import styles from '../../design/UploadForm.module.css'
import btnStyles from '../../design/Button.module.css'
import appStyles from '../../App.module.css'
import ImageSpinner from '../../app_components/ImageSpinner'
import { Row, Col, Container, Button, Form, Image, Alert } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

import axiosReq from 'axios'


function UploadEditForm() {
    const [errors, setErrors] = useState({})

    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: '',
    });
    const {title, content, image} = postData;

    const imageInput = useRef(null)
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(`/posts/${id}/`);
            const { title, content, image, is_owner } = data;

            is_owner ? setPostData({ title, content, image }) : history.push("/");
        } catch (err) {
            console.log(err);
        }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangePost = (event) => {
        if (event.target.files.length){
            URL.revokeObjectURL(image)
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0])
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append('title', title)
        formData.append('content', content)
        if (imageInput?.current?.files[0]){
            formData.append('image', imageInput.current.files[0])
        }
        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (error) {
            console.log('error here?')
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
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={4}
                    name='content'
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant='warning' key={idx}>
                    {message}
                </Alert>
            ))}            
            <Button
                className={`${btnStyles.Button}`}
                onClick={() => history.goBack()}
            >Go back
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
                            onChange={handleChangePost}
                            ref={imageInput}
                        />
                    </Form.Group>
                    {errors?.image?.map((message, idx) => (
                        <Alert variant='warning' key={idx}>
                            {message}
                        </Alert>
                    ))}                    
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

export default UploadEditForm;