import { useState } from 'react'
import Carrusel1 from '../assets/Carrusel1.jpg'
import Carrusel2 from '../assets/Carrusel2.jpg'
import Carrusel3 from '../assets/Carrusel3.jpg'
import Carrusel4 from '../assets/Carrusel4.jpg'
import Carrusel5 from '../assets/Carrusel5.jpg'
import styles from './NuestroEspacio.module.css'

const imagenesCarrusel = [
    Carrusel1,
    Carrusel2,
    Carrusel3,
    Carrusel4,
    Carrusel5
]

export default function NuestroEspacio() {
    const [imagenActual, setImagenActual] = useState(0)

    return (
        <section className='lugar'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.presentacionLugar}>Nuestro Espacio</h2>
                    </div>
                </div>
            </div>
            <div className={`container-fluid ${styles.carruselContainer}`}>
                <div>
                    <div className={styles.carruselItem}>
                        <img
                            src={imagenesCarrusel[imagenActual]}
                            alt="Nuestro espacio"
                            className={styles.imagen} />
                    </div>
                </div>
                <div className={styles.contentIndicators}>
                    {
                        imagenesCarrusel.map((imagen, indice) => {
                            return (
                                <div
                                    key={indice}
                                    className={
                                        indice === imagenActual
                                            ? `${styles.indicator} ${styles.active}`
                                            : styles.indicator
                                    }
                                    onClick={() => setImagenActual(indice)}
                                >
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
