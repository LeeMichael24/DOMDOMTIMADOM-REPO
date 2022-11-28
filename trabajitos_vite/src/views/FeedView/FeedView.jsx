import classes from './FeedView.module.scss';
import Posts from './Posts/Posts';
import Accordion from './Accordion/Accordion';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Banner from './Banner/Banner';
import { useConfigContext } from '../../contexts/ConfigContext';
import axios from 'axios';


const FeedView = () => {
  const [posts, setPosts] = useState([]);
  const { startLoading, stopLoading} = useConfigContext();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      startLoading();
      /* const response = await fetch('http://localhost:3500/api/post/'); */
      const { data } = await axios.get("/post");
        setPosts(data.posts);
    } catch (error) {
      toast.error('Unexpected error!');
    } finally {
      stopLoading();
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

export default FeedView;

