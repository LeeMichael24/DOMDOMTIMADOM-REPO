import classes from './Feed.module.scss';
import Cards from './Cards/Cards';
import Accordion from './Accordion/Accordion';


const Feed = () => {
    return(
        <section className={classes['section-total']}>
            <Accordion />

            <Cards />
        </section>
    )
}

export default Feed;