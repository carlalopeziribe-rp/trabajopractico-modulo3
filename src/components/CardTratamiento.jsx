import styles from './CardTratamiento.module.css'

export default function CardTratamiento({
    titulo,
    descripcion,
    detalle,
    valor
}) {
    return (
        <div className={`${styles.card} h-100 d-flex flex-column`}>
            <div className={styles.cardBody}>
                <div>
                    <h5 className={`${styles.cardTitle} text-center`}>
                        {titulo}
                    </h5>
                    <p className={styles.cardTextServicios}>
                        {descripcion}
                    </p>
                    <ul className={styles.cardList}>
                        <li>{detalle}</li>
                        <li>Valor: {valor}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}