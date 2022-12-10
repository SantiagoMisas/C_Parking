const Navbar=()=>{
return(

<nav>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Clientes
        <img  className="navbar_icon" src="./user.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Facturas
        <img  className="navbar_icon" src="./money_invoice.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Productos
        <img  className="navbar_icon" src="./p.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Servicios
        <img  className="navbar_icon" src="./s.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Vehiculos
        <img  className="navbar_icon" src="./motorcycle.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <input className="navbar_input" type="text" placeholder="Buscar"/>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Ajustes
            <img  className="navbar_icon navbar_icon_margin_top" src="./setup.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
        </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Salir
            <img  className="navbar_icon navbar_icon_margin_top" src="./out.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
</nav>

)

}
export {Navbar}