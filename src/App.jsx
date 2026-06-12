import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Servicios from './pages/Servicios.jsx'
import TuRutina from './pages/TuRutina.jsx'
import Contacto from './pages/Contacto.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/turutina' element={<TuRutina />} />
                <Route path='/contacto' element={<Contacto />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
