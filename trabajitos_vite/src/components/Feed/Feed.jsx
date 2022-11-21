import classes from './Feed.module.scss';
import Posts from './Posts /Posts';
import Accordion from './Accordion/Accordion';
import { useState, useEffect } from 'react';
import FormularioPrueba from '../../components/FormularioPrueba/FormularioPrueba';
import { toast } from 'react-toastify';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3500/api/post/');

        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
        }
    } catch (error) {
      toast.error('Unexepected error!');
    }
  }

  const savePost = async (title, description, number, image) => {
    try { 
      const response = await fetch('http://localhost:3500/api/post/', { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          title, description,number, image
        })
       });

       if(response.ok) {
        toast.success('Post saved!')
       } else {
        const msg = {
          "400": "wrong fields",
          "404": "Not found!"
        }

        toast.warm(msg[response.status.toString()] || 'Unexpected error')
       }
       
    } catch (error) {
      toast.error("Unexpedted error")
    }
  }

  const onAddPostHandler = (title, description, number, image) => {
/*     const _posts = [...posts, {
      _id: new Date().getTime().toString(),
      title: title,
      description: description,
      number: number,
      image: image
    }]; */

  /*     _posts.push({
      _id: new Date().getTime().toString(),
      title: title,
      description: description,
      number: number,
      image: image
    }) */

    /* setPosts(_posts); */

    savePost(title, description, number, image)
    fetchPosts();

  }

    return(
      <section>
            <FormularioPrueba onAddPost={onAddPostHandler}/>
          <section className={classes['section-total']}>
              <Accordion />
              <Posts posts={posts}/>
          </section>
      </section>
    )
}

export default Feed;

