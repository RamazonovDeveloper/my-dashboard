import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Table from '../components/table/Table'

export default function Main() {
  return (
    <div>
      This is main page
      <Navbar/>
        <Routes>
            <Route path='/tables' element={<Table/>}/>
        </Routes>  

    </div>
  )
}
