const TableProduct=()=>{
    return (
		<section>
		<section className="flex_wrap">
		<input className="form_table_input" placeholder='Codigo De Producto' type="text"/>
		<input className="form_table_input" placeholder='Nombre De Producto' type="text"/>
		<input className="form_table_input" placeholder='Cantidad' type="text"/>
		<input className="form_table_input" placeholder='Fecha De Entrada' type="text"/>
		<input className="form_table_input" placeholder='Fecha De Salida' type="text"/>
		<input className="form_table_input" placeholder='Valor' type="text"/>
		<input className="form_table_input" placeholder='Sección' type="text"/>
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
	<caption>Registro De Producto</caption>
	<thead>
	<tr>
		<th>Codigo De Producto</th>
		<th>Nombre De Producto</th>
		<th>Cantidad</th>
		<th>Fecha De Entrada</th>
		<th>Fecha De Salida</th>
		<th>Valor</th>
		<th>Sección</th>
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
export {TableProduct}