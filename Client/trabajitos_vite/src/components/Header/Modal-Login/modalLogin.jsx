import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GoogleLogin } from '@react-oauth/google';




const ModalLogin = ({ show, handleClose }) => {


    return (<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><figure>
            <GoogleLogin onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </figure></Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                cerrar
            </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default ModalLogin;