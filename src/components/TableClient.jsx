import axios from "axios";
import { useEffect, useState } from "react";

const TableClient = () => {
  const uriClientes = "http://localhost:3100/clientes";
  const [clientes, setCliente] = useState([]);
  const [cedula, setcedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [celular, setCelular] = useState("");
  const agregarCliente = async (e) => {
    //e.preventDefault()//Buscar la forma que guarde y muestre el registro sin recargar la pagina

    const res = await axios.post(uriClientes, {
      cedula: cedula,
      nombre: nombre,
      correo: correo,
      direccion: direccion,
      celular: celular,
    });
  };
  useEffect(() => {
    getClientes();
  }, []);
  const getClientes = async () => {
    const res = await axios.get(uriClientes);
    setCliente(res.data);
  };

  return (
    <section>
      <form onSubmit={agregarCliente} className="flex_wrap">
        <input
          className="form_table_input"
          placeholder="Cedula"
          type="text"
          value={cedula}
          onChange={(e) => setcedula(e.target.value)}
        />
        <input
          className="form_table_input"
          placeholder="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="form_table_input"
          placeholder="Dirección"
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <input
          className="form_table_input"
          placeholder="Correo"
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          className="form_table_input"
          placeholder="Celular"
          type="text"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
        <section className="flex_wrap standar_measure">
          <button className="form_table_button">
            <span>Agregar</span>
          </button>
          <button className="form_table_button">
            <span>Editar</span>
          </button>
          <button className="form_table_button">
            <span>Buscar</span>
          </button>
          <button className="form_table_button">
            <span>Eliminar</span>
          </button>
        </section>
      </form>

      <section className="Section_Table">
        <table class="Table">
          <caption>Registro De Cliente</caption>
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente)=> (
              <tr>
                <td>{cliente.cedula}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.celular}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="Section_Table">
        <button className="table_close_button">
          <span>
            Cerrar Ventana
            <img className="table_close_icon" src="./out.svg" alt="" />
          </span>
        </button>
      </section>
    </section>
  );
};

export default TableClient;
