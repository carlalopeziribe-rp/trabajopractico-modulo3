import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/turutina' element={<TuRutina />} />
                <Route path='/contacto' element={<Contacto />} />
            </Routes>

        </div>
    )
}

export default App
