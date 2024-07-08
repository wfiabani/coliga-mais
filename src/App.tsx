import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css'

import MainMenu from './components/MainMenu/MainMenu'

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <MainMenu />
        <div id='content'>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
