import FormularioPrueba from "./FormularioPrueba/FormularioPrueba";
import { toast } from 'react-toastify';


const RecibeFormularioP = () => {
  
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
        toast.error("Unexpected error savePost")
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