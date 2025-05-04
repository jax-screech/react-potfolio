import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Info from './components/About'
import Contact from './components/Contact.'
import Home from './components/Home'

import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
