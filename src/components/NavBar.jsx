import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'

export default function NavBar(){
    return (
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img className="navbar-brand" src={logo} alt="logo" width="100"
                    height="100"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
