import classes from "./Banner.module.scss";
import banner from "../../assets/images/banner.jpg";


const Banner = () => {
    return (
        <section className={classes["image-section"]}>
            <div className={classes["image-figure"]}>
                <img className={classes["image-banner"]} src={banner} />
            </div>
        </section>
    )
}

export default Banner;