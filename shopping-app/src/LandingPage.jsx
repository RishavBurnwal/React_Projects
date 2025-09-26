import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='LandingPage'>
      <Link to="/admin-login">
        <img src="..." alt="" />
        <h1>Admin Login</h1>
      </Link>

      <Link to="/user-login">
        <img src="..." alt="" />
        <h1>User Login</h1>
      </Link>
    </div>
  )
}

export default LandingPage
