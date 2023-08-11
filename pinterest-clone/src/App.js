import React from 'react'
import Home from './pages/Home/Home'
import Header from './partials/Header/Header'
import Folders from './pages/Folders/Folders'
import { AppContext } from './store/AppContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const initialState = {
  activePin: null,
  mode:null,
  folders:[],
  type:null
}

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <AppContext initalState={ { initialState }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/minhas-pastas' element={<Folders />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  )
}

export default App
