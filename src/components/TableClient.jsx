const TableClient =()=>{
return (
<section>
	<section className="flex_wrap">
	<input className="form_table_input" placeholder='Cedula' type="text"/>
	<input className="form_table_input" placeholder='Nombre' type="text"/>
	<input className="form_table_input" placeholder='Apellido' type="text"/>
	<input className="form_table_input" placeholder='Fecha De Nacimiento' type="text"/>
	<input className="form_table_input" placeholder='Sexo' type="text"/>
	<input className="form_table_input" placeholder='Email' type="text"/>
	<input className="form_table_input" placeholder='Dirección' type="text"/>
	<input className="form_table_input" placeholder='Telefono' type="text"/>
<section className="flex_wrap standar_measure">
<button className="form_table_button"><span>Agregar</span></button>
<button className="form_table_button"><span>Editar</span></button>
<button className="form_table_button"><span>Buscar</span></button>
<button className="form_table_button"><span>Eliminar</span></button>
</section>

	</section>

<section className="Section_Table">
<table class="Table">
	<caption>Registro De Cliente</caption>
	<thead>
	<tr>
		<th>Cedula</th>
		<th>Nombre</th>
		<th>Apellido</th>
		<th>Fecha De Nacimiento</th>
		<th>Sexo</th>
		<th>Email</th>
		<th>Dirección</th>
		<th>Telefono</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	</tbody>
</table>
</section>
</section>
)}

export {TableClient}