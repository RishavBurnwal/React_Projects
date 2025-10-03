import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminLogin from './Components/AdminLogin'
import UserLogin from './Components/UserLogin'
import {ToastContainer} from 'react-toastify'
import AdminSign from './Components/AdminSign'
import AdminHomePage from './Components/AdminHomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './Components/ErrorPage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/user-login' element={<UserLogin/>} />
        <Route path='/admin-sign' element={<AdminSign/>}/>
        <Route path='/admin-homepage/*' element={<AdminHomePage/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App