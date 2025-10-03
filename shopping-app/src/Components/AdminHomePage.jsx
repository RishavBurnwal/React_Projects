import { Route, Routes } from 'react-router-dom'
import '../Styles/AdminHomePage.css'
import Navbar from './Navbar'
import AddProducts from './AddProducts'

function AdminHomePage() {
  return (
    <div className='AdminHomePage'>
      <Navbar/>
      <div className='content'>
      <Routes>
        <Route path="/add-products" element={<AddProducts/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default AdminHomePage
