import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Formulario from './Components/Formulario'
import Navbar from './Components/Navbar'
import Context from './Context/Context'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Home from './Pages/Home'
import ErrorBoundary from './utils/ErrorBoundary'

function App() {

  return (
    <>
    <ToastContainer/>
    <Formulario/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={
          <ErrorBoundary>
            <Detail/>
          </ErrorBoundary>
        }/>
        <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
      </Routes>
    </>
  )
}

export default App
