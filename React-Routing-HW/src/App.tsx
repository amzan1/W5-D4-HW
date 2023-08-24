import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookDetail from './pages/BookDetail'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':id' element={<BookDetail/>}/>
      </Routes>
    </>
  )
}

export default App
