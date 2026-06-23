import HeroServicios from "../components/HeroServicios"
import CategoriaServicios from "../components/CategoriaServicios";

const masajes = [
  {
    titulo: 'Masaje descontracturante',
    descripcion: 'Es un tipo de masaje que tiene como objetivo liberar los músculos y las articulaciones para ayudarlos a funcionar en su nivel óptimo. El propósito del masaje es relajar y aflojar los músculos rígidos y tensos.',
    detalle: '60 minutos',
    valor: '$30.000'
  },
  {
    titulo: 'Masaje relajante',
    descripcion: 'Es una terapia manual suave de cuerpo completo para reducir el estrés, aliviar tensiones musculares leves y mejorar la circulación mediante movimientos largos, amasamientos y presiones suaves y constantes.',
    detalle: '60 minutos',
    valor: '$25.000'
  },
  {
    titulo: 'Reiki',
    descripcion: 'El método Reiki se basa en el enfoque oriental de que todo ser vivo posee una Energía Vital que debe fluir correctamente. Busca armonizar el campo energético, reducir el estrés, aliviar dolores y promover el bienestar físico, emocional y espiritual.',
    detalle: '60 minutos',
    valor: '$35.000'
  },
];

const faciales = [
  {
    titulo: 'Dermapen',
    descripcion: 'Es un tratamiento médico de micropunción que rejuvenece al rostro: reduce arrugas, bolsas, ojeras, cicatrices, manchas y cualquier imperfección. No genera dolor, es una muy buena opción para generar efectos de luminosidad, hidratación facial y reducir pequeñas arrugas.',
    detalle: 'Se sugiere un tratamiento de no menos de 6 sesiones.',
    valor: '$50.000'
  },
  {
    titulo: 'Peeling',
    descripcion: 'Es un tratamiento dermatológico que exfolia las capas más superficiales de la piel y estimula la creación de nuevas capas de mejor calidad y textura en la dermis y epidermis. A su vez, unifica el tono de la piel y elimina algunas de las manchas causadas por el sol.',
    detalle: 'La recomendación de los profesionales es realizar de 1 a 4 peelings al año, según la piel de cada paciente.',
    valor: '$50.000'
  },
  {
    titulo: 'Radiofrecuencia',
    descripcion: 'El tratamiento es indoloro, no requiere ningún tipo de anestesia y está indicado para cualquier tipo de piel. Se estimula la formación natural de colágeno para mantener un alto nivel de vitalidad en la piel de la cara. ',
    detalle: 'Se recomiendan entre 6 y 8 sesiones.',
    valor: '$70.000'
  },
];

const corporales = [
  {
    titulo: 'Radiofrecuencia',
    descripcion: 'Estimula la producción del colágeno, mejora la circulación sanguínea del tejido graso, contribuyendo a su desecho, y favorece el drenaje linfático natural del cuerpo. Reduce el volumen de la zona tratada y mejora visiblemente la apariencia de la piel con celulitis y estrías.',
    detalle: 'Se sugiere un tratamiento de no menos de 6 sesiones.',
    valor: '$50.000 por sesión'
  },
  {
    titulo: 'Mesoterapia',
    descripcion: 'Es una técnica estética que puede ser aplicada en el rostro, distintas zonas del cuerpo y en el cuero cabelludo. Se aplican microinyecciones que no generan dolor y que favorecen la regeneración celular. Esto tiene un impacto directo en la apariencia de la piel, especialmente en abdomen, glúteos y piernas, aunque también en otras zonas.',
    detalle: 'La recomendación de los profesionales es realizar 1 sesión al mes.',
    valor: '$60.000 por sesión'
  },
];

export default function Servicios() {
  return (
    <>
      < HeroServicios />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <CategoriaServicios
              id="masajes"
              titulo="Masajes"
              tratamientos={masajes}
            />

            <CategoriaServicios
              id="faciales"
              titulo="Tratamientos faciales"
              tratamientos={faciales}
            />

            <CategoriaServicios
              id="corporales"
              titulo="Tratamientos corporales"
              tratamientos={corporales}
            />
          </div>
        </div>
      </div>
    </>
  )
}