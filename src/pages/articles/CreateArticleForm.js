import React, { useState } from 'react'
import { Button, Container, Form, Row, Alert, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

import appStyles from '../../App.module.css';
import btnStyles from '../../design/Button.module.css'
import styles from '../../design/ArticleForm.module.css'

import { axiosReq } from '../../netblend_api/axiosDefaults'
import {useRedirect} from '../../hooks/useRedirect';

function CreateArticleForm() {
    useRedirect('loggedOut');
    const [errors, setErrors] = useState();
    const history = useHistory();
    const [articleData, setArticleData] = useState({
        title: '',
        content: '',
    })

    const {title, content} = articleData;

    const handleChange = (event) => {
        setArticleData({
            ...articleData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);      
        
        try {
            const {data} = await axiosReq.post('/article/', formData);
            history.push(`/article/${data.id}`);
            console.log(formData)
        } catch (error) {
            console.log(error)
            if (error.response?.status !== 401){
                setErrors(error.response?.data);
            }
        }
    };

  return (
    <Row>
        <Col className='py-2 p-0 p-md-2' md={10} lg={10}>
            <Container className={`${appStyles.Content} ${styles.Container}`}>
                <hr />
                <h1 className='text-center'>
                    <strong>Create an Article</strong>
                </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='text-center'>
                        <Form.Label><strong>Caption</strong></Form.Label>
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
                    <Form.Group className='text-center'>
                        <Form.Label><strong>Description</strong></Form.Label>
                        <Form.Control 
                            as='textarea'
                            rows={8}
                            name='content'
                            value={content}
                            onChange={handleChange}
                            aria-label='content'
                        />
                    </Form.Group>
                    {errors?.content?.map((message, idx) => (
                    <Alert variant="danger" key={idx}>
                        {message}
                    </Alert>
                    ))}
                    <Row className={styles.RowSpace}>
                        <Button type='submit' className={btnStyles.Button}>
                            Post
                        </Button>
                        <Button onClick={() => history.goBack()} className={btnStyles.Button}>
                            Cancel
                        </Button>            
                    </Row>
                </Form>
            </Container>
        </Col>
    </Row>
  )
}

export default CreateArticleForm