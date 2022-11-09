import classes from './Cards.module.scss';
import hasbii from '../../../assets/images/hasbii.jpg';
import star from '../../../assets/images/star.png';
import rating from '../../../assets/images/rating.png';


const Cards = () => {
    return (
        <div className={classes["section-derecha"]}>
            <div className="cards">
                <figure>
                    <img src={hasbii} className="image-card" alt={classes["perfil-pic"]}/>
                    <p style="font-size: 12px;">
                        Evaluación
                    </p>
                    <div className={classes["rating"]}>
                        <figure>
                            <img src={star} alt={classes["rating"]}/>
                        </figure>
                        <figure>
                            <img src={star} alt={classes["rating"]}/>
                        </figure>
                        <figure>
                            <img src={star} alt={classes["rating"]}/>
                        </figure>
                        <figure>
                            <img src={star} alt={classes["rating"]}/>
                        </figure>
                        <figure>
                            <img src={rating} alt={classes["rating half"]}/>
                        </figure>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Cards;