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
          <p>Form Here</p>
        </Container>
        <Container className={`mt-5 ${appStyles.Content}`}>
          <Link>
            Already a coffee addict? <span>Sign In Here!</span>
          </Link>
        </Container>
      </Col>
      <Col>
        <Image />
      </Col>
    </Row>
  )
}

export default SignUpForm