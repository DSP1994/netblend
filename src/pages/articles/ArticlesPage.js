import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';
import { axiosReq } from '../../netblend_api/axiosDefaults';
import ImageSpinner from '../../app_components/ImageSpinner';
import Article from './Article';


function ArticlePage({message, filter = ''}) {
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
    })

  return (
    <Container>
        <div>
            <Form>
                <Form.Control />
            </Form>
        </div>
        {/* hasLoaded function will go here along with imagespinner */}

    </Container>
  )
}

export default ArticlePage