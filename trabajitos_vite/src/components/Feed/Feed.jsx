import classes from './Feed.module.scss';
import Cards from './Cards/Cards';
import AlwaysOpenExample from './Accordion/Accordion';


const Feed = () => {
    return(
        <section className={classes['section-total']}>
            <AlwaysOpenExample />

            <Cards />
        </section>
    )
}

export default Feed;