const Footer=()=>{
    return (
        <section className="column">
        <section className="footer flex standar_measure">
    <button className="footer_button">
        <span className="flex footer_button_span">Contacto
        <img className="footer_icon" src="./contact.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="footer_button">
        <span className="flex footer_button_span">Facebook
        <img className="footer_icon" src="./facebook.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="footer_button">
        <span className="flex footer_button_span">Instagram
        <img className="footer_icon" src="./instagram.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
    <button className="footer_button">
        <span className="flex footer_button_span">What's App
        <img className="footer_icon" src="./whatsapp.svg" alt="" />
        </span>
        <svg>
		<rect x="0" y="0" fill="none"></rect>
		</svg>
    </button>
        </section>
        <section className="flex footer_title">
        <p className="footer_p_title_c">C</p>
                <p className="footer_p_subtitle_">-</p>
                <p className="footer_p_subtitle">Parkin</p>
                <p className="footer_p_subtitle_g">g</p>
        </section>
        </section>
    )
}
export {Footer}