import notFound from '../../assets/images/notFound.png';
import classes from './NotFoundView.module.scss';


const NotFoundView = () => {
    return(
        <div className={classes['container']}>
            <h2> Ups! Page not Found :(  </h2>
            <img width='300px' src={ notFound } />
        </div>
    )
}

export default NotFoundView;