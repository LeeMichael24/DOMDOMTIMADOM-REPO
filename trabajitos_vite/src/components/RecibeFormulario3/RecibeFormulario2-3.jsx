import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import RecibeFormulario2 from './RecibeFormulario2/RecibeFormulario2';
import axios from 'axios';
import { useConfigContext } from '../../contexts/ConfigContext';


const RecibeFormulario3 = () => {
    const [posts, setPosts] = useState([]);
    const { startLoading, sotpLoading} = useConfigContext();


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
        sotpLoading();
      } 
    }
    return (
        <section>
            <RecibeFormulario2 posts = {posts}/>
        </section>
    )
}

export default RecibeFormulario3;