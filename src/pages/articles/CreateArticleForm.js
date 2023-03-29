import React, { useState } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

import appStyles from '../../App.module.css';
import btnStyles from '../../design/Button.module.css'
import styles from '../../design/CreateArticleForm.module.css'

function CreateArticleForm() {
    const [errors, setErrors] = useState();
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

  return (
    <Container className={styles.FormAlign}>
        <Form onSubmit={() => {}}>
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
            {/* Alert will go here */}
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
            {/* Alert will go here */}
            <Row className={styles.RowSpace}>
                <Button type='submit' className={btnStyles.Button}>
                    Post
                </Button>
                <Button onClick={() => {}} className={btnStyles.Button}>
                    Cancel
                </Button>            
            </Row>
        </Form>
    </Container>
  )
}

export default CreateArticleForm