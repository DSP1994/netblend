import React, {useState} from 'react';
import axios from 'axios';

import styles from "../../design/SignInUpForm.module.css";
import btnStyles from "../../design/Button.module.css";
import appStyles from "../../App.module.css"

import { Row, Col, Container, Image, Form, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function SignInForm () {
    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/login/", signInData);
            history.push("/");
        } catch (error) {
            setErrors(error.response?.data);
        }
    }

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

  return (
    <Row className={styles.Row}> 
        <Col className='my-auto py-2 p-md-2' md={6}>
            <Container className={`${appStyles.Content} p-4`}>
                <h1 className={styles.Header}>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label className="d-none">Username</Form.Label>
                        <Form.Control 
                            className={styles.Input}
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={username}
                            onChange={handleChange}                            
                        />
                    </Form.Group>
                    {errors.username?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>
                        {message}
                    </Alert>
                    ))}                    
                    <Form.Group controlId="password">
                        <Form.Label className="d-none">Password</Form.Label>
                        <Form.Control 
                            className={styles.Input}
                            type="password"
                            placeholder="Enter Password"
                            name="password"   
                            value={password}
                            onChange={handleChange}                         
                        />
                    </Form.Group>
                    {errors.password?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>
                        {message}
                    </Alert>
                    ))}                    
                    <Button 
                        type="submit"
                        className={`${btnStyles.Button} ${btnStyles.Fill}`}
                    >
                        Sign Up Now!
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                    <Alert variant='warning' key={idx} className="mt-3">
                        {message}
                    </Alert>
                    ))}                                   
                </Form>
            </Container>
            <Container className={`mt-5 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signup">
                Not a coffee addict yet? <span>Sign Up Here!</span>
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

export default SignInForm