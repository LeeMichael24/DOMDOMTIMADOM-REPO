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
            description={post.description}
            image={post.image}
            imageProfile={post.imageProfile}
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