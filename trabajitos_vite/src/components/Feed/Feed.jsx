import classes from './Feed.module.scss';
import Posts from './Posts /Posts';
import Accordion from './Accordion/Accordion';
import { useState, useEffect } from 'react';
import FormularioPrueba from '../../components/FormularioPrueba/FormularioPrueba';
import { toast } from 'react-toastify';
import Banner from './Banner/Banner';
import Posts2 from './Posts2/SinglePost2/SinglePost2';

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

  const savePost = async (name, lastName, email, number, location, description, image, imageProfile) => {
    try { 
      const response = await fetch('http://localhost:3500/api/post/', { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          name, lastName, email, number, location, description, image, imageProfile
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
      toast.error("Unexpedted error savePost")
    }
  }

  const onAddPostHandler = async (name, lastName, email, number, location, description, image, imageProfile) => {

    await savePost(name, lastName, email, number, location, description, image, imageProfile);
    fetchPosts();
  }

    return(
      <section>
            <Banner />
           <FormularioPrueba onAddPost={onAddPostHandler}/>
          <section className={classes['section-total']}>
              <Accordion />
              <Posts posts={posts}/>
          </section>
          <Posts2 posts={posts}/>
      </section>
    )
}

export default Feed;

