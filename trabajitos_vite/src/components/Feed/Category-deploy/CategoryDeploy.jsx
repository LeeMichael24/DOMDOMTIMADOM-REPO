import classes from "./Category.module.scss"
import dash from '../../../assets/images/dash.png';
import arrow from '../../../assets/images/arrow.png';


const CategoryDeploy = () => {
    

    return (
        <div className={classes["section-izquierda"]}>
            <ul className={classes["list"]}>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Categorias </a>
                    </div>
                </li>

                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Hogar </a>
                        <img src={arrow} className={classes["list_arrow"]}/>
                    </div>

                    <ul className={classes["list_show"]}>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                    </ul>
                </li>

                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Educación </a>
                        <img src={arrow} className={classes["list_arrow"]}/>
                    </div>

                    <ul className={classes["list_show"]}>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                    </ul>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}>  Agrícola </a>
                        <img src={arrow} className={classes["list_arrow"]}/>
                    </div>

                    <ul className={classes["list_show"]}>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                        <li className={classes["list_inside"]}>
                            <a href="#" className={classes["nav_link"]}>Estoy dentro</a>
                        </li>
                    </ul>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Construcción </a>
                    </div>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Seguridad </a>
                    </div>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Salud </a>
                    </div>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Limpieza </a>
                    </div>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Mascotas </a>
                    </div>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Reparaciones </a>
                    </div>
                </li>
                <li className={classes["list_item"]}>
                    <div className={classes["list_button"]}>
                        <img src={dash} className={classes["list_img"]}/>
                        <a href="#" className={classes["nav_link"]}> Extras </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CategoryDeploy;