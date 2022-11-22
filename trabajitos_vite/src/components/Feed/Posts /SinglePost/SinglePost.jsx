import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './SinglePost.module.scss';


function SinglePost({title ='', description ='', image ='', number =''}) {
  return (
      <div className={classes['section-singlepost']}>
          {Array.from({ length: 2 }).map((_, idx) => (
              <Col>
              <Card className={classes['Card']}>
                  <Card.Img variant="top" src={ image } />
                  <Card.Body>
                  <Card.Title>Estrellas</Card.Title>
                  <Card.Text className={classes['card-text']}>
                  <strong>Nombre:</strong> { title }
                  </Card.Text>
                  <Card.Text className={classes['card-text']}>
                          <strong>Telefono:</strong> { number }
                  </Card.Text>
                  <Card.Text className={classes['card-text']}>
                          <strong>Descripción:</strong> { description }
                  </Card.Text>
                  </Card.Body>
              </Card>
              </Col>
          ))}
      </div>
  );
}

export default SinglePost;