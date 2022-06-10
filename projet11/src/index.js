import React from 'react'
// import ReactDOM from 'react-dom'
import './style/index.css'
// import App from './composants/App'
import Banner from './composants/banner'
// import reportWebVitals from './reportWebVitals'
import Survey from './composants/survey.js'
// import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './composants/header/index'
import Erreurpage from './Pages/erreur'
import Home from './Pages/Home'
import Logement from './Pages/Logement'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import ReactDOM from 'react-dom/client'
import Freelances from './composants/Freelance'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freelance" element={<Freelances />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Erreurpage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
