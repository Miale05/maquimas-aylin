import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Autos from './components/Autos.jsx'
import Inmuebles from './components/Inmuebles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/autos" element={<Autos />} />
        <Route path="/inmuebles" element={<Inmuebles />} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
