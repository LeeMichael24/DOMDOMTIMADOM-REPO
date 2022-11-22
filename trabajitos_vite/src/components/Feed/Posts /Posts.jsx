import classes from '../Posts /Posts.module.scss';
import SinglePost from './SinglePost/SinglePost';


const Posts = ({ posts = {} }) => {
    const mappedPosts = posts.map(post => {
        return( 
            <>      
            <SinglePost 
            key={post._id}
            name={post.name}
            lastName={post.lastName}
            number={post.number}
            image={post.image}
            />
{/*             <Form_page2
            key={post._id}
            name={post.name}
            lastName={post.lastName}
            email={post.email}
            number={post.number}
            description={post.description}
            image={post.image}
            imageProfile={post.imageProfile}
            /> */}
            </>

        )
    })
    return(
        <section className={classes["section-derecha"]}>
            { mappedPosts }
        </section>
    )
}

export default Posts;