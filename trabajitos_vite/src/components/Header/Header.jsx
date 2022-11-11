import classes from "./Header.module.scss";
import logoReact from '../../assets/images/React.png';
import logoLogin from '../../assets/images/Logo-login.png';
import { GoogleLogin } from '@react-oauth/google';
import ModalLogin from "./Modal-Login/modalLogin";
import React, { useState } from 'react';


const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

            <header className={classes['Header']}>
                <nav className={classes['nav']}>
                    <div className={classes["nav-container-home"]}>
                        <figure>
                            <button className={classes['button-home-login']}><img width="50px" src={logoReact} /></button>
                        </figure>
                    </div>
                    <div className={classes["nav-container-bar"]}>
                        <input className={classes['search-bar']} type="text" placeholder="  Busca la categoria que necesitas..." />
                    </div>
                    <div className={classes["nav-container-public"]}>
                        <button className={classes['button-public']}> Publicar </button>
                    </div>
                    <div className={classes["nav-container-login"]}>
                        <figure>

                            <button className={classes['button-login']}  onClick = {handleShow}> <img width="55px" src={logoLogin}/> </button>
                            
                        </figure>
                    </div>
                </nav>
                <ModalLogin show ={show} handleClose = {handleClose}/>
            </header>
    )
}


export default Header;

