import classes from '../FormularioPrueba/FormularioPrueba.module.scss';


const formularioPrueba = ( {onAddPost} ) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log("Enviando formulario");

        console.log({
            title: data.get("title"),
            description: data.get("description"),
            image: data.get("image"),
            number: data.get("number")
        });
        /* Ejecutar el insert */
        onAddPost(data.get('title'), data.get('description'), data.get('number'), data.get('image'));
    }
    return (
        <section className={classes['post-form-section']}>
            <h3>Tell us about you</h3>

            <form onSubmit={onSubmitHandler}>
                <label>
                    Nombre *
                    <input name="title"/>
                </label>

                <label>
                    Telefono *
                    <input name="number"/>
                </label>

                <label>
                    Descripción *
                    <textarea name="description" rows={5}/>
                </label>

                <label> 
                    Profile pic *
                    <input name="image" type="url"/>
                </label>

                <button type='submit'>
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default formularioPrueba;