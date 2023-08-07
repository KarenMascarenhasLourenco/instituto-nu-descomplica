import React from 'react'
import Home from './pages/Home/Home'
import Header from './partials/Header/Header'
import Folders from './pages/Folders/Folders'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/minhas-pastas' element={<Folders />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
