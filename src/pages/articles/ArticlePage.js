import React, { useEffect, useState } from 'react'
import {Row, Col, Container} from "react-bootstrap";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../netblend_api/axiosDefaults';
import Article from './Article';

function ArticlePage() {
    const {id} = useParams();
    const [article, setArticle] = useState({results: []});

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: article}] = await Promise.all([
                    axiosReq.get(`/article/${id}`),
                ]);
                setArticle({results: [article]})
            } catch (error) {
                console.log(error)
            }
        };
        handleMount();
    }, [id])

  return (
    <Row>
        <Col>
            <Container>
                <Article {...article.results[0]} setArticle={setArticle} articlePage/>
            </Container>
        </Col>
    </Row>
  )
}

export default ArticlePage