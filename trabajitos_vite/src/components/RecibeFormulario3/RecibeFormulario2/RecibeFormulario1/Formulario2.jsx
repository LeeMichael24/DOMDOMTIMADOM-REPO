import classes from "./Formulario2.module.scss";
/* import valoracion from '../valoracion/valoracion'; */
import Carousel from 'react-bootstrap/Carousel';



const formulario2 = ({ name = '', lastName = '', email = '', number = '', location = '', description = '', image = '', imageProfile = '' , category = ''}) => {
    return (
        <div className={classes["container"]} >

            {/* < Lado izquierdo > */}

            <div className={classes["left_side"]}>
                <div className={classes["profileText"]}>
                    <div className={classes["imgBx"]}>
                        <img src={imageProfile} alt="" />
                    </div>
                    <h2 className={classes["h2-name-last"]}> {name} {lastName} <br /> </h2>
                </div>

                {/* < Contactame >  */}

                <div className={classes["contactInfo"]}>
                    <h3 className={classes["title"]}> Contáctame </h3>
                    <ul>
                        <li>
                            <span className={classes["icon"]}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg><i className="fa fa-phone" aria-hclassNameden="true"></i>
                            </span>
                            <span className={classes["text"]}> {number} </span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className={classes["icon"]} > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg><i className="fa fa-envelope" aria-hclassNameden="true"></i> </span>
                            <span className={classes["text"]} > {email} </span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className={classes["icon"]}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg><i className="fa fa-map-marker" aria-hclassNameden="true"></i> </span>
                            <span className={classes["text"]}> {location} </span>
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
                    <p className={classes["category"]}>{ category }
                    </p>
                  
                </div>

                {/* Carousel */}

                <div className={classes["abilities"]}>
                    <h2 className={classes["title2"]}> Trabajos / Repositorio</h2>
                    <Carousel className={classes["Carousel"]}>
                        <Carousel.Item className= {classes["imgs"]}>
                            <img
                                className= {classes["adentro"]}
                                src={image}
                                alt="First slide"
                            />
                
                        </Carousel.Item>
                        <Carousel.Item className= {classes["imgs"]}>
                            <img
                                className= {classes["adentro"]}
                                src={image}
                                alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item className= {classes["imgs"]}>
                            <img
                                className= {classes["adentro"]}
                                src={image}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </div>

            </div>

        </div>

    )

}

export default formulario2;