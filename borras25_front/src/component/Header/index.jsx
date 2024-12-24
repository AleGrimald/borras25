import './Header.css';

const Header = (props)=>{
    const {manejoLogin} = props;
    
    return<header className='header'>
        <nav className='header_nav'>
            <div className='nav_logo'>
                <img className='logo_img' src="logo_borras.svg" alt="" />
                <div className='logo_texto'>
                    <h1 className='texto_h1'>BORRAS FRANCO</h1>
                    <h5 className='texto_h5'>PROF. EDUCACION FISICA</h5>
                </div>
            </div>

            <ul className='nav_lista'>
                <li className='lista_li'><a className='li_a' href="">Entrenamiento</a></li>
                <li className='lista_li'><a className='li_a' href="">Nutricion</a></li>
                <li className='lista_li'><a className='li_a' href="">Testimonios</a></li>
            </ul>

            <div className='nav_boton'>
                <button onClick={manejoLogin} className='boton_unete'>Log-in</button>
            </div>
        </nav>

        <section className='header_section'>
            <div className='section_texto'>
                <h2 className='texto_h2'>¡Transforma Tu Cuerpo!</h2>
                <p className='texto_p'>Conviértete en la mejor versión de ti mismo con nuestro entrenamiento personalizado.</p>
            </div>

            <div className='section_boton'>
                <button className='boton_contacto'>CONTACTAME AHORA</button>
            </div>
        </section>
    </header>
}

export default Header;