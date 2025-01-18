import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPage from '../page/ListPage'
import AddPage from '../page/AddPage'

const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListPage />} path="/" />
        <Route element={<AddPage />} path="/add" />
      </Routes>
    </BrowserRouter>
  )
}

export default EnrutadorDeApp
