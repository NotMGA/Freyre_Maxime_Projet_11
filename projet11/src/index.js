import React from 'react'
import './style/index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Erreurpage from './Pages/erreur'
import Home from './Pages/Home'
import Logement from './Pages/Logement'

import ReactDOM from 'react-dom/client'
import Freelances from './composants/Freelance'
import PageApropos from './Pages/Apropos'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freelance" element={<Freelances />} />
      <Route path="/apropos" element={<PageApropos />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Erreurpage />} />
    </Routes>
  </Router>
)
