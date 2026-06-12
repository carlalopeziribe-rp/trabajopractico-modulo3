import ServiciosMasajes from '../assets/ServiciosMasajes.jpg'
import ServiciosFaciales from '../assets/ServiciosFaciales.jpg'
import ServiciosCorporales from '../assets/ServiciosCorporales.jpg'
import CardServicio from './CardServicio.jsx'

const servicios = [
    {
        titulo: 'Masajes',
        imagen: ServiciosMasajes,
        descripcion: 'Técnica de valoración y tratamiento manual que propicia relajación, alivio y bienestar. Masajes relajantes, descontracturantes y reiki.',
        enlace: '/servicios#masajes'
    },
    {
        titulo: 'Tratamientos faciales',
        imagen: ServiciosFaciales,
        descripcion: 'Procedimientos cosméticos no invasivos diseñados para limpiar, exfoliar, hidratar y revitalizar la piel del rostro, mejorando su salud y apariencia sin cirugía.',
        enlace: '/servicios#faciales'
    },
    {
        titulo: 'Tratamientos corporales',
        imagen: ServiciosCorporales,
        descripcion: 'Procedimientos no invasivos, diseñados para modelar la figura, eliminar grasa localizada, reducir la celulitis, combatir la flacidez y mejorar la textura de la piel.',
        enlace: '/servicios#corporales'
    }
];

export default function NuestrosServicios() {
    return (
        <section className="servicios">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="presentacion-servicios">Nuestros servicios</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        servicios.map((servicio) => {
                            return (
                                <div className="col"
                                key={servicio.titulo}>
                                    <CardServicio 
                                    imagen={servicio.imagen}
                                    titulo={servicio.titulo}
                                    descripcion={servicio.descripcion}
                                    enlace={servicio.enlace}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}