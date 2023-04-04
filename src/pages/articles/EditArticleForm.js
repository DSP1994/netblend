import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

import appStyles from '../../App.module.css';
import btnStyles from '../../design/Button.module.css'
import styles from '../../design/ArticleForm.module.css'

import { axiosReq } from '../../netblend_api/axiosDefaults'
import {useRedirect} from '../../hooks/useRedirect';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function EditArticleForm() {
    useRedirect('loggedOut');
    const [errors, setErrors] = useState();
    const history = useHistory();
    const [articleData, setArticleData] = useState({
        title: '',
        content: '',
    })

    const {title, content} = articleData;
    const {id} = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/article/${id}/`);
                const {title, content, is_owner} = data;

                is_owner ? setArticleData({
                        title, content
                    }) : history.push('/');
            } catch (error) {
                console.log(error)
            }
        };

        handleMount();
    }, [history, id])

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
    <Container className={styles.FormAlign}>
        <hr />
        <h1><strong>Edit an Article</strong></h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Caption</Form.Label>
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
                <Form.Label>Description</Form.Label>
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
                    Edit
                </Button>
                <Button onClick={() => history.goBack()} className={btnStyles.Button}>
                    Cancel
                </Button>            
            </Row>
        </Form>
    </Container>
  )
}

export default EditArticleForm