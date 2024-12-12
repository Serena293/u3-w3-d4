import { useState, useEffect } from 'react';
import Article from '../interfaces/Article';
import ArticlePreview from './ArticlePreview';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AllArticles = () => {
    const ENDPOINT = 'https://api.spaceflightnewsapi.net/v3/articles';
    const [articles, setArticles] = useState<Article[]>([]);

    const fetchArticles = async () => {
        try {
            const response = await fetch(ENDPOINT);
            if (response.ok) {
          const  data = await response.json();
                setArticles(data);
            } else {
                alert('Response NOT ok');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div>
            <h2>ARTICOLI DISPONIBILI:</h2>
            <Row>
                <Col xs={12}>
                    {articles.map((article) => (
                        <ArticlePreview article={article} key={article.id} />
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default AllArticles;