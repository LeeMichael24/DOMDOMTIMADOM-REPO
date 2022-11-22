import classes from "./form_page2.module.scss";
import valoracion from './valoracion/valoracion';

import Carousel from 'react-bootstrap/Carousel';



const Form_page2 = ({ name='', lastName='', email='', number='', location='', description='', image='', imageProfile='' }) => {
    return (
        <div className={classes["container"]}>

            {/* < Lado izquierdo > */}

            <div className={classes["left_side"]}>
                <div className={classes["profileText"]}>
                    <div className={classes["imgBx"]}>
                        <img src={ imageProfile } alt="" />
                    </div>
                    <h2> {name} { lastName } <br /> <span> Desarrollador Web</span></h2>
                </div>

                {/* < Contactame >  */}

                <div className={classes["contactInfo"]}>
                    <h3 className={classes["title"]}> Contáctame </h3>
                    <ul>
                        <li>
                            <span className={classes["icon"]}><i className="fa fa-phone" aria-hclassNameden="true"></i>
                            </span>
                            <span className={classes["text"]}> { number } </span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className={classes["icon"]}><i className="fa fa-envelope" aria-hclassNameden="true"></i> </span>
                            <span className={classes["text"]} > { email } </span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className={classes["icon"]}><i className="fa fa-map-marker" aria-hclassNameden="true"></i> </span>
                            <span className={classes["text"]}> { location } </span>
                        </li>
                    </ul>
                </div>


                {/* < Valoracion  */}

                <div className={classes["contactInfo"]}>
                    <h3 className={classes["title"]}> Valoración </h3>
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

                {/* < Espacio para comentarios >*/}

                <div className={classes["contactInfo"]}>
                    <h3 className={classes["title"]}> Dime, que te parecieron mis servicios? </h3>
                    <textarea className={classes["textArea"]} name="w3review" rows="4" cols="50" />


                </div>

            </div>

            {/* < Lado derecho >  */}

            <div className={classes["right_side"]}>
                <div className={classes["about"]}>
                    <h2 className={classes["title2"]}>Datos generales</h2>
                    <p className={classes["descripcion"]}>{ description }
                    </p>
                </div>

                <div className={classes["abilities"]}>
                    <h2 className={classes["title2"]}> Habilidades</h2>
                    <p className={classes["descripcion"]}>{ description }
                    </p>
                </div>

                {/* Carousel */}

                <div className={classes["abilities"]}>
                    <h2 className={classes["title2"]}> Trabajos / Repositorio</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ image }
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ image }
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ image }
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

            </div>

        </div>

    )

}

export default Form_page2;