import React, { useEffect, useState } from 'react'

import {Row, Col, Container} from "react-bootstrap"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../netblend_api/axiosDefaults'

import appStyles from '../../App.module.css'
import Upload from './Upload'

const UploadPage = () => {
    const {id} = useParams();
    const [upload, setUpload] = useState({ results: []})

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: upload}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`)
                ])
                setUpload({results: [upload]})
                console.log(upload)
            } catch (error) {
                console.log(error)
            }
        }

        handleMount()
    }, [id])
  return (
    <Row className='h-100'>
        <p>mobile</p>
        <Upload {...upload.results[0]} setUpload={setUpload} />
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