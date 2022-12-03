
const Login= ()=>{
    return(
    <section className="column">

        <form className="form_login" action='' method=''>
        <section className="flex login_section_icons">
                <img className="login_icon" src="./motorcycle.svg" alt="" />
                <img className="login_icon" src="./van.svg" alt="" />
                <img className="login_icon" src="./truck.svg" alt="" />
                <img className="login_icon" src="./car.svg" alt="" />
            </section>
           
        <section className="flex login_title">
                <p className="login_p_title_c">C</p>
                <p className="login_p_subtitle_">-</p>
                <p className="login_p_subtitle">Parkin</p>
                <p className="login_p_subtitle_g">g</p>
            </section>
            <input className="login_input" placeholder='Usuario' type="text"/>
            <input className="login_input" placeholder='Contraseña' type="text"/>
            <section className="flex login_section_buttons">
                <section className="column">
                    <button className="login_button"><span>Iniciar Sesión</span></button>
                    <p className="login_p">¿Ya tienes una cuenta?</p>
                </section>
                <section className="column">
                        <button className="login_button"> <span>Registrarse</span></button>
                        <p className="login_p">¿No tienes una cuenta?</p>
                </section>
            </section>
        </form>
    </section>
    
    )
    }
    
    export {Login}