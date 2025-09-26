import {Link} from 'react-router-dom';
import '../Styles/LandingPage.css';

function LandingPage() {
    //npm install react-router-dom
    return (    
        <div className="LandingPage">
            <Link to="/admin-login">
            <img src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg" alt="" />
            <h1>Admin Login</h1>
            </Link>

            <Link to="/user-login">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-svg-download-png-6515860.png" alt="" />
            <h1>User Login</h1>
            </Link>
        </div>
    )
}
export default LandingPage;