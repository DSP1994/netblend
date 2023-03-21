import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../../design/SignInUpForm.module.css';
import btnStyles from '../../design/Button.module.css';
import appStyles from '../../App.module.css';

import { Form, Button, Image, COl, Row, Container, Col } from 'react-bootstrap';

const SignUpForm = () => {
  return (
    <Row>
      <Col>
        <Container>
          <h1>Sign Up</h1>
          {/* I will put my form here, ish */}
        </Container>
        <Container>
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