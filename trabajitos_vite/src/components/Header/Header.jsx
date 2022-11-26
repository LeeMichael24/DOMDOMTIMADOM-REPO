import classes from "./Header.module.scss";
import trabajitos from '../../assets/images/trabajitos.svg';
import logoLogin from '../../assets/images/Logo-login.png';
import { GoogleLogin } from '@react-oauth/google';
import ModalLogin from "./Modal-Login/modalLogin";
import React, { useState } from 'react';
import Button from "../Buttom/Buttom";

import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const Header = () => {
    const { logout, user } = useUserContext();
    const navigate = useNavigate();
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <header className={classes['Header']}>
            <nav className={classes['nav']}>
                <div className={classes["nav-container-home"]}>
                    <figure>
                        <Link className={classes['button-home-login']} to = "/"><img width="240px" src={ trabajitos } /></Link>
                    </figure>
                </div>
                <div className={classes["nav-container-bar"]}>
                    <input className={classes['search-bar']} type="text" placeholder="  Busca la categoria que necesitas..." />
                </div>
                <div className={classes["nav-container-public"]}>

                    <Link className={classes["public"]} to="fp"> Publicar </Link>

                </div>
                <div className={classes["nav-container-login"]}>
                    <figure>
                    {
                        !user ?
                            <>
                            <Button className={classes["button-login"]} onClick={() => navigate("/auth/signin")}> Sign in </Button>
                            <Button className={classes["button-login"]} onClick={() => navigate("/auth/signup")}> Sign up </Button>
                            </> :
                            <>
                            <Button onClick={() => { logout() }}> Sign out </Button>
                            </>
                    }
                    </figure>
                </div>
            </nav>
            <ModalLogin show={show} handleClose={handleClose} />

        </header>
    )
}


export default Header;

