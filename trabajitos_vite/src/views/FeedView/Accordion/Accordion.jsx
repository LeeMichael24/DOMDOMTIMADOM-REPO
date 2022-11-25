import Accordion from 'react-bootstrap/Accordion';
import classes from './Accordion.module.scss';


function AlwaysOpenExample() {
  return (
    <div className={classes['div-accordion']}>
            <h1 className={classes['h1']}>Categorias</h1>
            <hr className={classes['hr-accordion']}/>
        <Accordion className={classes['Accordion']} defaultActiveKey={['0']} >
        <Accordion.Item eventKey="0">
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Hogar</Accordion.Header>
            <Accordion.Body>
                Ama de casa             
            </Accordion.Body>
            <Accordion.Body>
                Decoraciones             
            </Accordion.Body>
            <Accordion.Body>
                Pintor             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Eduación</Accordion.Header>
            <Accordion.Body>
                Tutorias             
            </Accordion.Body>
            <Accordion.Body>
                Cursos             
            </Accordion.Body>
            <Accordion.Body>
                Utenciolios(librerias)             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Agrícola</Accordion.Header>
            <Accordion.Body>
                Jardinería            
            </Accordion.Body>
            <Accordion.Body>
                Limpieza hogar - plagas             
            </Accordion.Body>
            <Accordion.Body>
                Limpieza piscinas             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Construcción</Accordion.Header>
            <Accordion.Body>
                Albañil Mantenimiento/ cambio techos
            </Accordion.Body>
            <Accordion.Body>
                Mantenimiento/ cambio techos
            </Accordion.Body>
            <Accordion.Body>
                Fontanero
            </Accordion.Body>
            <Accordion.Body>
                Electricista
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>Seguridad</Accordion.Header>
            <Accordion.Body>
                Camaras de seguridad             
            </Accordion.Body>
            <Accordion.Body>
                Agentes de seguridad - vigilantes             
            </Accordion.Body>
            <Accordion.Body>
                PRI             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
            <Accordion.Header>Salud</Accordion.Header>
            <Accordion.Body>
                Enfermeros/as             
            </Accordion.Body>
            <Accordion.Body>
                Farmacias             
            </Accordion.Body>
            <Accordion.Body>
                Terapias domicilio             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
            <Accordion.Header>Limpieza</Accordion.Header>
            <Accordion.Body>
                Limpieza total casas             
            </Accordion.Body>
            <Accordion.Body>
                Limpieza tapizerias              
            </Accordion.Body>
            <Accordion.Body>
                Limpiza jardinería             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
            <Accordion.Header>Mascotas</Accordion.Header>
            <Accordion.Body>
                Cuidador de mascotas             
            </Accordion.Body>
            <Accordion.Body>
                Paseador de mascotas             
            </Accordion.Body>
        </Accordion.Item>        
        <Accordion.Item eventKey="9">
            <Accordion.Header>Reparaciones</Accordion.Header>
            <Accordion.Body>
                Reparaciones fullstack             
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
            <Accordion.Header>Extras</Accordion.Header>
            <Accordion.Body>
                Mantenimiento de vehiculos             
            </Accordion.Body>
            <Accordion.Body>
                Personaliizaciones de PC gamer             
            </Accordion.Body>
            <Accordion.Body>
                Armar componentes PC             
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default AlwaysOpenExample;
