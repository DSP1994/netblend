import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';
import { axiosReq } from '../../netblend_api/axiosDefaults';
import ImageSpinner from '../../app_components/ImageSpinner';
import Article from './Article';
import { fetchMoreData } from '../../utils/utils';
import NoResults from '../../images/no-results.jpg'
import appStyles from '../../App.module.css'
import PopularProfiles from '../profiles/PopularProfiles';
import styles from '../../design/ArticlesPage.module.css'



function ArticlesPage({message, filter = ''}) {
    const [article, setArticle] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();

    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const {data} = await axiosReq.get(
                    `/article/?${filter}search=${query}`
                );
                setArticle(data);
                setHasLoaded(true);
            } catch (error) {
                console.log(error)
            }
        };

        setHasLoaded(false)

        const timer = setTimeout(() => {
            fetchArticles();
        }, 1000);
        return () => {
            clearTimeout(timer)
        };
    }, [filter, query, pathname])

  return (
    <Row className='h-100'>
            <Col className='py-2 p-0 p-lg-2' lg={8}>
                <PopularProfiles mobile />
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
                        {article.results.length ? (
                        <InfiniteScroll 
                            children={
                            article.results.map((article) => (
                                <Article key={article.id} {...article} setArticle={setArticle} />
                            ))
                            }
                            dataLength={article.results.length}
                            loader={<ImageSpinner spinner />}
                            hasMore={!!article.next}
                            next={() => fetchMoreData(article, setArticle)}
                        />

                        ) : (
                            <Container className={appStyles.Content}>
                                <ImageSpinner src={NoResults} message={message}/>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className={appStyles.Content}>
                        <ImageSpinner spinner />
                    </Container>
                )}
            </Col>
            <Col md={4} className='d-none d-lg-block p-0 p-lg-2'>
                <PopularProfiles />
            </Col>        
        </Row>
  )
}

export default ArticlesPage