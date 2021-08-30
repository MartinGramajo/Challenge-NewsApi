import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card, Col, Form, FloatingLabel } from 'react-bootstrap'

export default function News() {
    const [articles, setArticles] = useState([])
    const [category, setCategory] = useState('general')

   
    
    const getNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=862184311009478084b1be93894e8cb1&category=${category}`);
        setArticles(response.data.articles);
    }

    useEffect(() => {
        getNews();
    }, [category])
    
    
    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value)
    }
    

    return (
        <div className="container d-flex flex-wrap justify-content-center">
            <div >
                <img style={{ width: '300px' }} src="/img/logo_transparent.png" alt="" />
            <FloatingLabel className=" m-auto" controlId="floatingSelect" label="Busca por categorias">
                <Form.Select onChange={handleChange} aria-label="Floating label select example">
                    <option value="general">general</option>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="health">Salud</option>
                    <option value="science">Ciencia</option>
                    <option value="sport">Deportes</option>
                    <option value="technology">Tecnologia</option>
                </Form.Select>
                </FloatingLabel>
            </div>
            <div className="container d-flex flex-wrap justify-content-center mt-5" as={Col} md="4">
                {articles.map((article, id) =>
                (<div>
                    <Card className="my-2 mx-3 "  style={{ width: '300px', height:'400px' }}>
                        <Card.Img style={{ width: '100%' }} src={article.urlToImage} />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>
                                {article.publishedAt}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>))}
            </div>
        </div>
    )
}
