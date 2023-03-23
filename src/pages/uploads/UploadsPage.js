import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router';

import appStyles from '../../App.module.css'
import { axiosReq } from '../../netblend_api/axiosDefaults';
import Upload from './Upload';

import NoResults from '../../images/no-results.jpg'
import ImageSpinner from '../../app_components/ImageSpinner';


function UploadsPage({ message, filter = ''}) {
    const [posts, setPosts] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const {data} = await axiosReq.get(`/posts/?${filter}`)
                setPosts(data)
                setHasLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }

        setHasLoaded(false)
        fetchPosts()
    }, [filter, pathname])

  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <p>profs for mob</p>
            {hasLoaded ? (
                <>
                    {posts.results.length
                        ? posts.results.map((post) => (
                            <Upload key={post.id} {...post} setPosts={setPosts} />
                        ))
                     : <Container className={appStyles.Content}>
                        <ImageSpinner src={NoResults} message={message}/>
                       </Container>}
                </>
            ) : (
                <Container className={appStyles.Content}>
                    <ImageSpinner spinner />
                </Container>
            )}
        </Col>
        <Col md={4} className='d-none d-lg-block p-0 p-lg-2'>
            <p>profs for pc</p>
        </Col>        
    </Row>
  )
}

export default UploadsPage