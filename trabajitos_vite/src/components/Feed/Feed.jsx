import classes from './Feed.module.scss';
import Posts from './Posts /Posts';
import Accordion from './Accordion/Accordion';
import { useState, useEffect } from 'react';
import FormularioPrueba from '../../components/FormularioPrueba/FormularioPrueba';
import { toast } from 'react-toastify';

const DummyData =[
  {
    "_id": "635ff374a78561f4a28fe2fd",
    "title": "Post #1",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/901",
    "number" : "62087920",
    "hidden": false,
    "createdAt": "2022-10-31T16:10:28.674Z",
    "updatedAt": "2022-10-31T16:10:28.674Z",
    "__v": 0
},
{
    "_id": "635ff37aa78561f4a28fe2ff",
    "title": "Post #2",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/902",
    "number" : "62087919",
    "hidden": false,
    "createdAt": "2022-10-31T16:10:34.251Z",
    "updatedAt": "2022-10-31T16:10:34.251Z",
    "__v": 0
},
{
    "_id": "635ff397a78561f4a28fe301",
    "title": "Post #3",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/903",
    "number" : "62087918",
    "hidden": false,
    "createdAt": "2022-10-31T16:11:03.143Z",
    "updatedAt": "2022-10-31T16:11:03.143Z",
    "__v": 0
},
{
    "_id": "635ff3e5a78561f4a28fe303",
    "title": "Post #4",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/904",
    "number" : "62087917",
    "hidden": false,
    "createdAt": "2022-10-31T16:12:21.508Z",
    "updatedAt": "2022-10-31T16:12:21.508Z",
    "__v": 0
},
{
    "_id": "635ff3f0a78561f4a28fe305",
    "title": "Post #5",
    "description": "Esta es la descripción del post #0",
    "image": "https://picsum.photos/1200/905",
    "number" : "62087916",
    "hidden": false,
    "createdAt": "2022-10-31T16:12:32.296Z",
    "updatedAt": "2022-10-31T16:12:32.296Z",
    "__v": 0
}
]

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3500/api/post/');

      if(response.ok) {
        const data = response.json();
        setPosts(data.posts);
      }
    } catch (error) {
      toast.error('Unexepected error!');
    }
  }

  const onAddPostHandler = (title, description, number, image) => {
    const _posts = [...posts, {
      _id: new Date().getTime().toString(),
      title: title,
      description: description,
      number: number,
      image: image
    }];

  /*     _posts.push({
      _id: new Date().getTime().toString(),
      title: title,
      description: description,
      number: number,
      image: image
    }) */

    setPosts(_posts);
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

