import { Link } from "react-router-dom"

export default function CardServicio({
    imagen,
    titulo,
    descripcion,
    enlace
}) {
    return (
        <div className="card h-100">
            <img
                src={imagen}
                alt={titulo}
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title text-center">
                    {titulo}
                </h5>
                <p className="card-text-servicios">
                    {descripcion}
                </p>
                <Link to={enlace}>
                    Ver más
                </Link>
            </div>
        </div>
    )
}