import React from 'react'

import {Row, Col, Container} from "react-bootstrap"

import appStyles from '../../App.module.css'

const UploadPage = () => {
  return (
    <Row className='h-100'>
        <p>mobile</p>
        <p>upload</p>
        <Col className='py-2 p-0 p-lg-2' lg={6}>
            <Container className={appStyles.Content}>
                Comment
            </Container>
        </Col>
        <Col lg={3} className='d-none d-lg-block p-0 p-lg-2'>
            PC
        </Col>
    </Row>
  )
}

export default UploadPage