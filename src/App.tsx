import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css'

// pages
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
