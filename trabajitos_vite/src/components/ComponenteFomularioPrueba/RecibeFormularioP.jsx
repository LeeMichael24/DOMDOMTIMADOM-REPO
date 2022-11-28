import FormularioPrueba from "./FormularioPrueba/FormularioPrueba";
import { toast } from 'react-toastify';
import axios from 'axios';

const RecibeFormularioP = () => {

    const savePost = async (name, lastName, email, number, location, description, image, imageProfile) => {
      try { 
      
         await axios.post("/post", {name, lastName, email, number, location, description, image, imageProfile });
         toast.success("Post saved!");
         toast.success("Ve a inicio para tu post!");

      } catch (error) {
        const { status } = error.response || { status: 500 };
        const msg = {
          "400": "Wrong Fields",
          "404": "Not found",
          "500": "Something went wrong!"
        }
        toast.error(msg[status.toString()] || "Unexpected error savePost");
      }
    }
  
    const onAddPostHandler = async (name, lastName, email, number, location, description, image, imageProfile) => {
  
      await savePost(name, lastName, email, number, location, description, image, imageProfile);
      fetchPosts();
    } 

    return (
        <section>
            <FormularioPrueba onAddPost={onAddPostHandler}/>
        </section>
    )
}


export default RecibeFormularioP;