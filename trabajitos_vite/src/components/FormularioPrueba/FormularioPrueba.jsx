import classes from '../FormularioPrueba/FormularioPrueba.module.scss';

const formularioPrueba = ({ onAddPost = () => {} }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        console.log({
            name: data.get("name"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            number: data.get("number"),
            location: data.get("location"),
            description: data.get("description"),
            image: data.get("image"),
            imageProfile: data.get("imageProfile"),
        });
        /* Ejecutar el insert */
        onAddPost(data.get('name'), data.get('lastName'), data.get('email'), data.get('number'), data.get('location'), data.get('description'), data.get('image'), data.get('imageProfile'));
    }
    return (
        <section className={classes['post-form-section']}>
                <h3 >Información Personal</h3>
                <hr/>
                
                <form className={classes['form-prueba']} onSubmit={onSubmitHandler}>
                    <label className={classes['label-form']}>
                                Nombre Completo*
                                
                        <input name="name" placeholder="Nombres"/>
                        <input name="lastName" placeholder="apellidos"/>
                        </label>
                    <label className={classes['label-form']}> 
                        Foto de perfil *
                    <input className={classes['form-image-p']} name="imageProfile" type="url" placeholder="url"/>
                </label>
                    <label className={classes['label-form']}>
                            Correo electrónico *
                            <input className={classes['email-form']} name="email"/>
                    </label>
                    <label className={classes['label-form']}>
                            Telefono *
                            <input name="number"/>
                    </label>

                    <label className={classes['label-form']}>
                            Ubicación *
                            <input name="location"/>
                    </label>
                    <label className={classes['label-form']}>
                            Descripción *
                            <textarea name="description" rows={4}/>
                    </label>

                    <label className={classes['label-form']}> 
                                Proyectos/ respositorio
                            <input name="image" type="url" placeholder="url"/>
                    </label>

                    <button className={classes['btn-form']} type='submit'>
                        Guardar anuncio
                    </button>
                </form>
        </section>
    )
}

export default formularioPrueba;