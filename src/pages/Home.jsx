import Hero from "../components/Hero"
import NuestrosServicios from "../components/NuestrosServicios"

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Hero />
          <NuestrosServicios />
        </div>
      </div>
    </div>
  )
}

export default Home