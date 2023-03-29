import React, { useState } from 'react'
import {Row, Col, Container} from "react-bootstrap";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Article from './Article';

function ArticlePage() {
    const {id} = useParams();
    const [article, setArticle] = useState({results: []});

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