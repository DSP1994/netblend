import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

import appStyles from '../../App.module.css';
import btnStyles from '../../design/Button.module.css'
import styles from '../../design/CreateArticleForm.module.css'

function CreateArticleForm() {
  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>
                <Form.Control />
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <Form.Control />
                </Form.Label>
            </Form.Group>
            <Row>
                <Button>

                </Button>
                <Button>
                    
                </Button>            
            </Row>
        </Form>
    </Container>
  )
}

export default CreateArticleForm