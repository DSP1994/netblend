import React from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'

import appStyles from '../../App.module.css'

const UploadsPage = () => {


  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <p>profs for mob</p>
            <p>list of uploads</p>
        </Col>
        <Col md={4} className='d-none d-lg-block p-0 p-lg-2'>
            <p>profs for pc</p>
        </Col>        
    </Row>
  )
}

export default UploadsPage