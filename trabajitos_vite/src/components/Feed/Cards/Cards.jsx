import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import hasbii from '../../../assets/images/hasbii.jpg';
import classes from './Cards.module.scss'

function GridExample() {
  return (
    <div className={classes['section-derecha']}>
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 7 }).map((_, idx) => (
            <Col>
            <Card className={classes['Card']}>
                <Card.Img variant="top" src={hasbii} />
                <Card.Body>
                <Card.Title>Estrellas</Card.Title>
                <Card.Text className={classes['card-text']}>
                <strong>Nombre:</strong> DOMDOM TIMADOM
                </Card.Text>
                <Card.Text className={classes['card-text']}>
                        <strong>Categoria:</strong> Ganadero
                </Card.Text>
                <Card.Text className={classes['card-text']}>
                        <strong>Descripción:</strong> Me gusta mucho compartir infomacion sobre computadorads y mundo cryto, ademas, Poseeo mucha info.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </div>
  );
}

export default GridExample;