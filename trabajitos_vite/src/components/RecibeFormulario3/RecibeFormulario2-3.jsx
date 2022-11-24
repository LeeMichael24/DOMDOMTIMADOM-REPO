import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import RecibeFormulario2 from './RecibeFormulario2/RecibeFormulario2';



const RecibeFormulario3 = () => {
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
        toast.error('Unexpected error!');
      }
    }
    return (
        <section>
            <RecibeFormulario2 posts = {posts}/>
        </section>
    )
}

export default RecibeFormulario3;