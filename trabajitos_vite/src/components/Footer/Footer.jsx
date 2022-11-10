import classes from "./Footer.module.scss";


const Footer = () => {


    return (
        <footer className={classes["footer"]}>
            <section className={classes["section"]}>
                <div className={classes["container"]}>
                    <div className={classes["c"]}>
                        <button className={classes["open"]}>
                            Sobre nosotros
                        </button>
                    </div>
                    <div className={classes["c"]}>
                        <button className={classes["open2"]}>
                            Contáctanos
                        </button>
                    </div>
                    <div className={classes["c"]}>
                        <button className={classes["open3"]}>
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

        </footer>
    )
}

export default Footer;


