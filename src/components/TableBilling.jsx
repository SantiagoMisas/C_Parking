const TableBilling =()=>{
    return (
		<section>
		<section className="flex_wrap">
		<input className="form_table_input" placeholder='Numero De Factura' type="text"/>
		<input className="form_table_input" placeholder='Cedula Del Cliente' type="text"/>
		<input className="form_table_input" placeholder='Fecha De Factura' type="text"/>
	<section className="flex_wrap standar_measure">
	<button className="form_table_button"><span>Agregar</span></button>
	<button className="form_table_button"><span>Editar</span></button>
	<button className="form_table_button"><span>Buscar</span></button>
	<button className="form_table_button"><span>Eliminar</span></button>
	</section>
	
		</section>
     <section className="Section_Table">
<table class="Table">
	<caption>Registro De Factura</caption>	
    <thead>	
        <tr>		
        <th>Numero De Factura</th>
		<th>Cedula Del Cliente</th>
		<th>Fecha De Factura</th>
	    </tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	</tbody>
</table>
    </section>
	</section>
    ) }
    
export {TableBilling}