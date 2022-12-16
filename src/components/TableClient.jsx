import axios from "axios";
import { useEffect, useState } from "react";

const TableClient = () => {
  const uriClientes = "http://localhost:3100/clientes";
  const [cliente, setCliente] = useState([]);
  useEffect(() => {
    getClientes();
  }, []);
  const getClientes = async () => {
    const res = await axios.get(uriClientes);
    setCliente(res.data);
  };

  return (
    <section>
      <section className="flex_wrap">
        <input className="form_table_input" placeholder="Cedula" type="text" />
        <input className="form_table_input" placeholder="Nombre" type="text" />
        <input
          className="form_table_input"
          placeholder="Dirección"
          type="text"
        />
        <input className="form_table_input" placeholder="Correo" type="text" />
        <input className="form_table_input" placeholder="Celular" type="text" />
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
      </section>

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
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
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

export { TableClient };
