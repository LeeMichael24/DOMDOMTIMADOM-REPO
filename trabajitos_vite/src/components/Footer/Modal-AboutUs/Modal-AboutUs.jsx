import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





const ModalAboutUs = ({ show, handleClose }) => {


    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
            <Modal.Title >Sobre nosotros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <p>
                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio
                    mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las
                    letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo
                    un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su 
                    texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este 
                    texto si se encuentran en estado de desarrollo.
                </p>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                cerrar
            </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default ModalAboutUs;