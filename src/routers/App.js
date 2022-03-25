import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import AddFoods from '../components/AddFoods'
import FoodList from '../components/FoodList'
import Inicio from '../components/Inicio'
import Nav from '../components/Nav'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/list" element={<FoodList/>}/>
                <Route path="/add" element={<AddFoods/>}/>
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App