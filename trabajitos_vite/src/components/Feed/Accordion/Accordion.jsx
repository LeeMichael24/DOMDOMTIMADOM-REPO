import Accordion from 'react-bootstrap/Accordion';
import classes from './Accordion.module.scss';

function AlwaysOpenExample() {
  return (
    <div className={classes['div-accordion']}>
        <h1>Categorias</h1>
        <Accordion className={classes['Accordion']} defaultActiveKey={['0']} flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Hogar</Accordion.Header>
            <Accordion.Body>
                DOM
            </Accordion.Body>
            <Accordion.Body>
                DOM
            </Accordion.Body>
            <Accordion.Body>
                TIMA
            </Accordion.Body>
            <Accordion.Body>
                DOM
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Eduación</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Agrícola</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Construcción</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Seguridad</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>Salud</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
            <Accordion.Header>Limpieza</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
            <Accordion.Header>Mascotas</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>        
        <Accordion.Item eventKey="8">
            <Accordion.Header>Reparaciones</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
            <Accordion.Header>Extras</Accordion.Header>
            <Accordion.Body>
                Eduacion             
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default AlwaysOpenExample;