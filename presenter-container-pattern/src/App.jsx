import React from 'react'
import { Route, Routes } from 'react-router'
import StartGame from './Pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/start' element={<StartGame/>}/>
      <Route path='/play' element={<PlayGame/>}/>
    </Routes>
  )
}

export default App