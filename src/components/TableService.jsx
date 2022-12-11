const TableService=()=>{
    return(
		<section>
		<section className="flex_wrap">
		<input className="form_table_input" placeholder='Codigo De Servicio' type="text"/>
		<input className="form_table_input" placeholder='Nombre De Servicio' type="text"/>
		<input className="form_table_input" placeholder='Fecha De Servicio' type="text"/>
		<input className="form_table_input" placeholder='Valor De Servicio' type="text"/>
		<input className="form_table_input" placeholder='Descripción' type="text"/>
		<input className="form_table_input" placeholder='Numero De Factura' type="text"/>
	<section className="flex_wrap standar_measure">
	<button className="form_table_button"><span>Agregar</span></button>
	<button className="form_table_button"><span>Editar</span></button>
	<button className="form_table_button"><span>Buscar</span></button>
	<button className="form_table_button"><span>Eliminar</span></button>
	</section>
	
		</section>

        <section className="Section_Table">
<table class="Table">
	<caption>Registro De Servicio</caption>
	<thead>
	<tr>
		<th>Codigo De Servicio</th>
		<th>Nombre De Servicio</th>
		<th>Fecha De Servicio</th>
		<th>Valor De Servicio</th>
		<th>Descripción</th>
		<th>Numero De Factura</th>
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
	</tr>
	<tr>
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
	</tr>
	<tr>
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
		<section className="Section_Table">
<button className="table_close_button"><span>Cerrar Ventana
<img  className="table_close_icon" src="./out.svg" alt="" />
</span></button>
</section>
		</section>
    )
}

export {TableService}