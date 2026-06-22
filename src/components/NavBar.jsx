import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="Logo de MI Centro de Bienestar"
                        width="100"
                        height="100" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-4">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        <Link className="nav-link" to="/servicios">Servicios</Link>
                        <Link className="nav-link" to="/turutina">Tu rutina</Link>
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
