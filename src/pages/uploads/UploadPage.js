import React, { useEffect, useState } from 'react'

import {Row, Col, Container} from "react-bootstrap"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../netblend_api/axiosDefaults'

import appStyles from '../../App.module.css'
import Upload from './Upload'

const UploadPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({ results: []})

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`)
                ])
                setPost({results: [post]})
                console.log(post)
            } catch (error) {
                console.log(error)
            }
        }

        handleMount()
    }, [id])
  return (
    <Row className='h-100'>
        <p>mobile</p>
        <Upload {...post.results[0]} setPost={setPost} setPage/>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <Container className={appStyles.Content}>
                Comment
            </Container>
        </Col>
        <Col lg={4} className='d-none d-lg-block p-0 p-lg-2'>
            PC
        </Col>
    </Row>
  )
}

export default UploadPage