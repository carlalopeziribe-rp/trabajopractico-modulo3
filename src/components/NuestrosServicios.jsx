import ServiciosMasajes from '../assets/ServiciosMasajes.jpg'
import ServiciosFaciales from '../assets/ServiciosFaciales.jpg'
import ServiciosCorporales from '../assets/ServiciosCorporales.jpg'

const servicios = [
    {
        titulo: 'Masajes',
        imagen: ServiciosMasajes,
        descripcion: 'Técnica de valoración y tratamiento manual que propicia relajación, alivio y bienestar. Masajes relajantes, descontracturantes y reiki.',
        enlace: 'servicios'
    },
    {
        titulo: 'Tratamientos faciales',
        imagen: ServiciosFaciales,
        descripcion: 'Procedimientos cosméticos no invasivos diseñados para limpiar, exfoliar, hidratar y revitalizar la piel del rostro, mejorando su salud y apariencia sin cirugía.',
        enlace: '/servicios'
    },
    {
        titulo: 'Tratamientos corporales',
        imagen: ServiciosCorporales,
        descripcion: 'Procedimientos no invasivos, diseñados para modelar la figura, eliminar grasa localizada, reducir la celulitis, combatir la flacidez y mejorar la textura de la piel.',
        enlace: '/servicios'
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
                <div className="row">
                    
                </div>
            </div>
        </section>
    )
}
