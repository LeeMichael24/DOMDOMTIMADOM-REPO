import classes from './FormularioPrueba.module.scss';


const FormularioPrueba = ({ onAddPost = () => {} }) => {
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
                <h3 className={classes['h3-fp']}>Información Personal</h3>
                <hr/>
                
                <form className={classes['form-prueba']} onSubmit={onSubmitHandler}>
                    <label className={classes['label-form']}>
                                Nombre Completo*
                                
                        <input name="name"  value={nameField} onChange={(e) => { setName(e.target.value)} } placeholder="Nombres" required/>
                        <input name="lastName" value={lastNameField} onChange={(e) => { setLastName(e.target.value)} } placeholder="apellidos" required/>
                        </label>
                    <label className={classes['label-form']}> 
                        Foto de perfil *
                    <input className={classes['form-image-p']} name="imageProfile" value={imageField} onChange={(e) => { setImage(e.target.value)} } type="url" placeholder="url"/>
                    </label>
                    <label className={classes['label-form']}>
                            Correo electrónico *
                            <input value={emailField} onChange={(e) => { setEmail(e.target.value)} } className={classes['email-form']} name="email"/>
                    </label>
                    <label className={classes['label-form']}>
                            Telefono *
                            <input value={numberField} onChange={(e) => { setNumber(e.target.value)} } name="number" required/>
                    </label>

                    <label className={classes['label-form']}>
                            Ubicación *
                            <input value={locationField} onChange={(e) => { setLocation(e.target.value)} } name="location" required/>
                    </label>
                    <label className={classes['label-form']}>
                            Descripción *
                            <textarea value={descriptionField} onChange={(e) => { setDescription(e.target.value)} } name="description" rows={4} required/>
                    </label>

                    <label className={classes['label-form']}> 
                                Proyectos/ respositorio
                            <input value={imageProfileField} onChange={(e) => { setImageProfile(e.target.value)} } name="image" type="url" placeholder="url"/>
                    </label>

                    <button  className={classes['btn-form']} type='submit' required>
                        Guardar anuncio
                    </button>
                </form>
        </section>
    )
}

export default FormularioPrueba;