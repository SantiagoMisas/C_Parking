
const Login= ()=>{
    return(
    <section className="column">

            <section className="flex">
                <p className="login_p_title_c">C</p>
                <p className="login_p_subtitle_">-</p>
                <p className="login_p_subtitle">Parkin</p>
                <p className="login_p_subtitle_g">g</p>
            </section>
        <form className="form_login" action='' method=''>
            <input className="login_input" placeholder='Nombre' type="text"/>
            <input className="login_input" placeholder='Correo' type="text"/>
            <section className="flex login_section_buttons">
                <section className="column">
                    <button className="login_button">Iniciar Sesión</button>
                    <p className="login_p">¿Ya tienes una cuenta?</p>
                </section>
                <section className="column">
                        <button className="login_button">Registrarse</button>
                        <p className="login_p">¿No tienes una cuenta?</p>
                </section>
            </section>
        </form>
    </section>
    
    )
    }
    
    export {Login}