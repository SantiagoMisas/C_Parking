const TableVehicle=()=>{
return (
<section>
	<section className="flex_wrap">
		<input className="form_table_input" placeholder='Placa De Vehiculo' type="text"/>
		<input className="form_table_input" placeholder='Cedula Propietario' type="text"/>
		<input className="form_table_input" placeholder='Tipo De Vehiculo' type="text"/>
		<input className="form_table_input" placeholder='Hora De Ingreso' type="text"/>
		<input className="form_table_input" placeholder='Fecha De Ingreso' type="text"/>
		<input className="form_table_input" placeholder='Hora De Salida' type="text"/>
		<input className="form_table_input" placeholder='Fecha De Salida' type="text"/>
	<section className="flex_wrap standar_measure">
	<button className="form_table_button"><span>Agregar</span></button>
	<button className="form_table_button"><span>Editar</span></button>
	<button className="form_table_button"><span>Buscar</span></button>
	<button className="form_table_button"><span>Eliminar</span></button>
	</section>
	
		</section>

    <section className="Section_Table">
<table class="Table">
	<caption>Registro De Vehiculo</caption>
	<thead>
	<tr>
		<th>Placa Vehiculo</th>
		<th>Cedula Propietario</th>
		<th>Tipo De Vehiculo</th>
		<th>Hora De Ingreso</th>
		<th>Fecha De Ingreso</th>
		<th>Hora De Salida</th>
		<th>Fecha De Salida</th>
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
	</tr>
	<tr>
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
	</tr>
	<tr>
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
)

}
export {TableVehicle}