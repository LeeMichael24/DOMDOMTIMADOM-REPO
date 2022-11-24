import classes from './Feed.module.scss';
import Posts from './Posts/Posts';
import Accordion from './Accordion/Accordion';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Banner from './Banner/Banner';

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
      /* toast.error('Unexpected error!'); */
    }
  }
    return(
      <section>
            <Banner />
            {/* <FormularioPrueba onAddPost={onAddPostHandler}/> */}
          <section className={classes['section-total']}>
              <Accordion />
              <Posts posts={posts}/>
          </section>
          {/* <RecibeFormulario3/> */}
      </section>
    )
}

export default Feed;

