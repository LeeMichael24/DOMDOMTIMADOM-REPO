import FormularioPrueba from "./FormularioPrueba/FormularioPrueba";
import { toast } from 'react-toastify';
import { useConfigContext } from '../../contexts/ConfigContext';
import axios from 'axios';

const RecibeFormularioP = () => {
  const { startLoading, stopLoading} = useConfigContext();

    const savePost = async (name, lastName, email, number, location, description, image, imageProfile) => {
      try { 
         startLoading();
         await axios.post('/post', {name, lastName, email, number, location, description, image, imageProfile })

      } catch (error) {
        const { status } = error.response || { status: 500 };
        const msg = {
          "400": "Wrong Fields",
          "404": "Not found",
          "500": "Something went wrong!"
        }
        toast.error("Unexpected error savePost")
      } finally {
        stopLoading();
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