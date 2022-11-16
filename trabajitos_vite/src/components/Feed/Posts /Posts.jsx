import classes from '../Posts /Posts.module.scss';
import SinglePost from './SinglePost/SinglePost';


const Posts = ({ posts = {} }) => {
    const mappedPosts = posts.map(post => {
        return(
            <SinglePost 
            key={post._id}
            title={post.title}
            description={post.description}
            image={post.image}
            number={post.number}
            />
        )
    })
    return(
        <section className={classes["section-derecha"]}>
            { mappedPosts }
        </section>
    )
}

export default Posts;