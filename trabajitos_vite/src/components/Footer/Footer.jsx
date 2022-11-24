import classes from "./Footer.module.scss";

import ModalAboutUs from "./Modal-AboutUs/Modal-AboutUs";
import ModalContact from "./Modal-Contact/Modal-Contact";

import React, { useState } from 'react';


const Footer = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <>

        <footer className={classes["footer"]}>
            <section className={classes["section-footer"]}>
                <div className={classes["container"]}>
                    <div className={classes["c"]}>
                        <button className={classes["open"]} >
                            Sobre nosotros
                        </button>
                    </div>
                    <div className={classes["c"]}>
                        <button className={classes["open2"]} onClick = {handleShow} >
                            Contáctanos
                        </button>
                    </div>
                    <div className={classes["c"]}>
                        <button className={classes["open3"]} >
                            Políticas
                        </button>
                    </div>

                </div>


                <div className={classes["social"]}>
                    <a href="https://www.facebook.com">
                        <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/512/665/665209.png" alt="Facebook" />
                    </a>

                    <a href="https://www.twitter.com">
                        <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/512/665/665228.png" alt="Twitter" />
                    </a>

                    <a href="https://www.instagram.com">
                        <img width="35" height="35" src="https://cdn-icons-png.flaticon.com/512/665/665211.png" alt="Instagram" />
                    </a>

                </div>


            </section>

            <ModalContact show ={show} handleClose = {handleClose}/>


        </footer>
        </>
    )
}

export default Footer;


