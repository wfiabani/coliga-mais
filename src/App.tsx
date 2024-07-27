import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css'

// pages
import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';
import Propostas from './pages/propostas/Propostas';
import Vereadores from './pages/vereadores/Vereadores';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/propostas" element={<Propostas />} />
        <Route path="/candidatos" element={<Vereadores />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
