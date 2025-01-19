import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../page/dashboardPage/Dashboard'
import AddTask from '../page/addTaskPage/AddTaskPage'

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<AddTask />} path="/add" />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
