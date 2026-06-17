import { Link } from "react-router-dom"
import styles from './CardServicio.module.css'

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
                className={`card-img-top ${styles.imagen}`}
            />
            <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>
                    {titulo}
                </h5>
                <p className={styles.cardTextServicios}>
                    {descripcion}
                </p>
                <Link className={styles.btnVerMas} to={enlace}>
                    Ver más
                </Link>
            </div>
        </div>
    )
}