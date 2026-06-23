import portadaservicios from '../assets/PortadaServicios.png'
import styles from './HeroServicios.module.css'

export default function HeroServicios() {
    return (
        <div className="container-fluid">
            <div className="card">
                <img src={portadaservicios}
                    alt="Portada seccion servicios" />
                <div className="card-img-overlay">
                    <h1 className={styles.cardTitle}>MI Centro de Bienestar</h1>
                    <p className={`${styles.cardTextPortada} col-lg-6`}>Encontrá los <strong>tratamientos faciales y corporales</strong> ideales para vos junto a nuestro equipo de especialistas para <strong>disfrutar de una piel firme y saludable</strong> sin cirugías.</p>
                </div>
            </div>
        </div>
    )
}