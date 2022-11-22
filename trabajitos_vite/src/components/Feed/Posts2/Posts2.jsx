

const Posts2 = ({ posts = {} }) => {
    const mappedPosts = posts.map(post => {
        return( 
            <Form_page2
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

}

export default Posts2;