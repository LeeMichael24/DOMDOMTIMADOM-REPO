import classes from './Feed.module.scss';
import Cards from './Cards/Cards';
import CategoryDeploy from './Category-deploy/CategoryDeploy';

const Feed = () => {
    return(
        <section className={classes['section-total']}>
            <CategoryDeploy />
            <Cards />
        </section>
    )
}

export default Feed;