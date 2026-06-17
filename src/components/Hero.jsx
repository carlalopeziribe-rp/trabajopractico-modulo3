import portadainicio from '../assets/PortadaInicio.jpg'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img
                            className={`${styles.fotoPortada} img-fluid mx-auto d-block`}
                            src={portadainicio}
                            alt="Difusor de aromas de madera con vapor, acompañado de toallas blancas y elementos de spa sobre una bandeja"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className={styles.presentacion}>MI Centro de Bienestar</h1>
                        <p className={styles.textoPresentacion}>
                            Un espacio dedicado al cuidado del cuerpo y la mente mediante
                            masajes y tratamientos faciales y corporales.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}