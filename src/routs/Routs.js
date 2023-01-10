import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home/Home'
import { Reservas } from '../pages/Reservas/Reservas'



export const Routs = () => {
  return (

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/reservas' element={<Reservas/>}/>
        </Routes>

  )
}
