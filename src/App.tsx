import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import MainLayout from './layouts/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import ProtectedRoute from './utils/ProtectedRoute'
import Navbar from './components/Navbar'


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
          <MainLayout/>
          </ProtectedRoute>
          }/>
        <Route path="/login" element={<AuthLayout/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
