// import './App.css'
import AdminLogin from './Components/AdminLogin'
import UserLogin from './Components/UserLogin'
import LandingPage from './Components/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
