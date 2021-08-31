import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardsNew({ article}) {
    return (
        <div>
            <Card className="my-2 mx-3 "  style={{ width: '300px', height:'400px' }}>
                        <Card.Img style={{ width: '100%' }} src={article.urlToImage} />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>
                                {article.publishedAt}
                            </Card.Text>
                        </Card.Body>
                    </Card>
        </div>
    )
}
