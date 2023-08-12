import Home from './pages/Home/Home'
import Header from './partials/Header/Header'
import Folders from './pages/Folders/Folders'
import { AppContext } from './store/AppContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const initialState = {
  activePinId: null,
  mode:null,
  folders:[],
  type:null,
  pins:[]
}

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <AppContext initialState={ initialState }>
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
