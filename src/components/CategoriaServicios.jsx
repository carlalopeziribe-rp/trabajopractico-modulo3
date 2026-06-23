import CardTratamiento from "./CardTratamiento";
import styles from "./CategoriaServicios.module.css";

export default function CategoriaServicios({
    id,
    titulo,
    tratamientos
}) {
    return (
        <section id={id}>
        <h2 className={styles.categoria}>{titulo}</h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            tratamientos.map((tratamiento) => {
              return (
                <div
                  className="col"
                  key={tratamiento.titulo}
                >
                  <CardTratamiento
                    titulo={tratamiento.titulo}
                    descripcion={tratamiento.descripcion}
                    detalle={tratamiento.detalle}
                    valor={tratamiento.valor}
                  />
                </div>
              )
            })
          }
        </div>
      </section>
    )
}