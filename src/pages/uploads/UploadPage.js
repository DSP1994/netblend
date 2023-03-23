import React, { useEffect, useState } from 'react'

import {Row, Col, Container} from "react-bootstrap"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import appStyles from '../../App.module.css'

const UploadPage = () => {
    const {id} = useParams();
    const [upload, setUpload] = useState({ results: []})

    useEffect(() => {
        const handleMount = async () => {
            try {
                
            } catch (error) {
                console.log(error)
            }
        }
    })
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