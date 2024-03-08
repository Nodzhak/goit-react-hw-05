import './App.css'
import Navigation from './components/Navigation/Navigation'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


function App() {

  return (
    <>
    <Navigation />
    
      <Routes>
        <Route path="/" element ={<HomePage />}/>
        <Route path="/movies" element ={<MoviesPage />}/>
        <Route path="*" element ={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
