const Navbar=()=>{
return(

<nav>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Agregar cliente
        <img  className="navbar_icon" src="./user.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Agregar producto
        <img  className="navbar_icon" src="./p.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">Agregar vehiculo
        <img  className="navbar_icon" src="./motorcycle.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <input className="navbar_input" type="text" placeholder="Buscar"/>
    <button className="navbar_button">
        <span className="flex navbar_button_span">
            <img  className="navbar_icon navbar_icon_margin_top" src="./setup.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
        </button>
    <button className="navbar_button">
        <span className="flex navbar_button_span">
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