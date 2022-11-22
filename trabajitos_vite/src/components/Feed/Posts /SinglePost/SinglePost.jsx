import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './SinglePost.module.scss';

import { Link } from "react-router-dom";



function SinglePost({ name = '', lastName='', image = '', number = '' }) {
    return (
        <div className={classes['section-singlepost']}>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Link className={classes["ver-mas"]} to="info">
                        <Card className={classes['Card']}>

                            <Card.Img variant="top" src={ image } />
                            <Card.Body>
                                <Card.Title>Estrellas</Card.Title>
                                <Card.Text className={classes['card-text']}>
                                    <strong>Nombre:</strong> { name } { lastName }
                                </Card.Text>
                                <Card.Text className={classes['card-text']}>
                                    <strong>Telefono:</strong> { number }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </div>
    );
}

export default SinglePost;