import classes from "./Banner.module.scss";
import banner11 from "../../../assets/images/banner11.jpg";


const Banner = () => {
    return (
        <section className={classes["image-section"]}>
        <hr className={classes["hr-banner"]}/>
            <div className={classes["imgBx"]}>
                <img className={classes["image-banner"]} src={banner11} />
                <div class={classes["centrado"]}>Llega hasta los lugares más lejanos de tu país </div>
            </div>
        </section>
    )
}

export default Banner;