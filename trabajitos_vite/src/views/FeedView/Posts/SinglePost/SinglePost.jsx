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

                    <Link className={classes["ver-mas"]} to="f2">
                        <Card className={classes['Card']}>

                            <Card.Img className={classes["card-img-top"]} variant="top" src={ image } />
                            <Card.Body>
                                <Card.Title>
                                <div className={classes["contactInfo"]}>
                                        <form className={classes["form"]}>
                                            <p className={classes["clasificacion"]} >
                                        <input calssName={classes["radio1"]} type="radio" name="estrellas" value="5" />

                                        <label className={classes["label-rate"]} for="radio1">★</label>

                                        <input calssName={classes["radio2"]} type="radio" name="estrellas" value="4" />

                                        <label className={classes["label-rate"]} for="radio2">★</label>

                                        <input calssName={classes["radio3"]} type="radio" name="estrellas" value="3" />

                                        <label className={classes["label-rate"]} for="radio3">★</label>

                                        <input calssName={classes["radio4"]} type="radio" name="estrellas" value="2" />

                                        <label className={classes["label-rate"]} for="radio4">★</label>

                                        <input calssName={classes["radio5"]} type="radio" name="estrellas" value="1" />

                                        <label className={classes["label-rate"]} for="radio5">★</label>
                                        </p>
                                    </form>
                                </div>
                                </Card.Title>
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