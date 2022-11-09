import classes from '../Main/Main.module.scss';
import Cards from './Cards/Cards';
import CategoryDeploy from './Category-deploy/CategoryDeploy';

const DOMDOMTIMADOM = () => {
    return(
        <section className={classes['section-total']}>
            <CategoryDeploy />
            <Cards />
        </section>
    )
}

export default DOMDOMTIMADOM;