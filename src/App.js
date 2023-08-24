import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Orders from './components/Orders'

const App = () => {
  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>

      </Routes>
      
     </BrowserRouter>
    
    </>
  )
}

export default App