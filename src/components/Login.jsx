
const Login= ()=>{
    return(
    <section>
        <form action='' method='POST'>
            <input value={nombre} placeholder='Nombre' type="text" onChange={(e)=> setNombre(e.target.value)}/>
            <input value={correo} placeholder='Correo' type="text" onChange={(e)=> setCorreo(e.target.value)}/>
            <input value={telefono} placeholder='Telefono' type="text" onChange={(e)=> setTelefono(e.target.value)}/>
        </form>
    </section>
    
    )
    }
    
    export default {Login}