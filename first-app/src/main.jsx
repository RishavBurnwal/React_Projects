import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Jspiders from './App.jsx'
console.log(React);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer />
    <Navbar />
    <Jspiders />
  </StrictMode>,
)
