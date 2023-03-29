import React, { useState } from 'react'
import { Button, Container, Form, Row, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

import appStyles from '../../App.module.css';
import btnStyles from '../../design/Button.module.css'
import styles from '../../design/CreateArticleForm.module.css'

import { axiosReq } from '../../netblend_api/axiosDefaults'

function CreateArticleForm() {
    const [errors, setErrors] = useState();
    const history = useHistory();
    const [articleData, setArticleData] = useState({
        title: '',
        content: '',
    })

    const {
        title, content,
    } = articleData;

    const handleChange = (event) => {
        setArticleData({
        ...articleData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDeaful();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);      
        
        try {
            const {data} = await axiosReq.post('/articles/', formData);
            history.push(`/articles/${data.id}`);
        } catch (error) {
            if (error.response?.status !== 401){
                setErrors(error.response?.data);
            }
        }
    };

  return (
    <Container className={styles.FormAlign}>
        <hr />
        <h1><strong>Create an Article</strong></h1>
        <Form onSubmit={() => handleSubmit}>
            <Form.Group>
                <Form.Label>Caption</Form.Label>
                <Form.Control 
                type='text'
                name='title'
                value={title}
                onChange={() => handleChange}
                aria-label='title'
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
            <Alert variant="danger" key={idx}>
                {message}
            </Alert>
            ))}
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                as='textarea'
                rows={8}
                name='content'
                value={content}
                onChange={() => handleChange}
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
  )
}

export default CreateArticleForm