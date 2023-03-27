import React, { useEffect, useState } from 'react'

import {Row, Col, Container} from "react-bootstrap"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../netblend_api/axiosDefaults'

import appStyles from '../../App.module.css'
import Upload from './Upload'
import CommentForm from '../comments/CommentForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'

function UploadPage() {
    const {id} = useParams();
    const [post, setPost] = useState({ results: []})
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({results : [] });

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
        <Upload {...post.results[0]} setPost={setPost} postPage/>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <Container className={appStyles.Content}>
                {currentUser ? (
                    <CommentForm
                    profile_id={currentUser.profile_id}
                    profileImage={profile_image}
                    post={id}
                    setPost={setPost}
                    setComments={setComments}
                    />
                    ) : comments.results.length ? (
                    "Comments"
                    ) : null}              
            </Container>
        </Col>
        <Col lg={4} className='d-none d-lg-block p-0 p-lg-2'>
            PC
        </Col>
    </Row>
  )
}

export default UploadPage