import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../../design/SignInUpForm.module.css';
import btnStyles from '../../design/Button.module.css';
import appStyles from '../../App.module.css';

import { Form, Button, Image, Row, Container, Col } from 'react-bootstrap';

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className='my-auto py-2 p-md-2' md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign Up</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className='d-none'>Username</Form.Label>
              <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Enter Username"
              name="username"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className='d-none'>Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name='password1'
              />
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Label className='d-none'>Confirm Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name='password2'
              />
            </Form.Group>
            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`}>
              Sign Up Now!
            </Button>
          </Form>
          
        </Container>
        <Container className={`mt-5 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already a coffee addict? <span>Sign In Here!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}>
        <Image className={`${appStyles.FillerImage}`}
        src={'https://res.cloudinary.com/dsp1994/image/upload/v1679421624/SignInUpPhoto_x7emxh.jpg'}/>
      </Col>
    </Row>
  )
}

export default SignUpForm