import Formulario2 from "./RecibeFormulario1/Formulario2";

const RecibeFormulario2 = ({ posts = {} }) => {
    const mappedPosts = posts.map(post => {
        return(
            <Formulario2 
            key={post._id}
            name={post.name}
            lastName={post.lastName}
            email={post.email}
            number={post.number}
            location= {post.location}
            description={post.description}
            image={post.image}
            imageProfile={post.imageProfile}
            category = {post.category}
            comments = {post.comments}
            />
        )
    })

    return (
        <section>
            { mappedPosts }
        </section>    
    )
}

export default RecibeFormulario2;