import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router';

import styles from '../../design/UploadsPage.module.css'
import appStyles from '../../App.module.css'
import { axiosReq } from '../../netblend_api/axiosDefaults';
import Upload from './Upload';

import NoResults from '../../images/no-results.jpg'
import ImageSpinner from '../../app_components/ImageSpinner';


function UploadsPage({ message, filter = ''}) {
    const [posts, setPosts] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();

    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
                setPosts(data)
                setHasLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchPosts();
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
        fetchPosts()
    }, [filter, query, pathname])

  return (
    <Row className='h-100'>
        <Col className='py-2 p-0 p-lg-2' lg={8}>
            <p>profs for mob</p>
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
                className={styles.SerachBar}
                onSubmit={(event) => event.preventDefault()}>
                  <Form.Control 
                  type='text'
                  className='mr-sm-2'
                  placeholder='Search Uploads'
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}/>  
            </Form>
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