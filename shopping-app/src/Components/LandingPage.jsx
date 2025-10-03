import '../Styles/LandingPage.css'
import {Link} from 'react-router-dom';
function LandingPage(){
    // npm install react-router-dom
    return (
        <div className="LandingPage">
            <Link to="/admin-login">
            <img src="https://tse1.mm.bing.net/th/id/OIP.kDboRh_1_d_1bXJSgrk96AAAAA?pid=Api&P=0&h=180" alt="" />
            <h1>Admin Login</h1></Link>
            <Link to="/user-login">
            <img src="https://tse2.mm.bing.net/th/id/OIP.M7JaF7SPhFcugd0-j55i7AHaHF?pid=Api&P=0&h=180" alt="" />
            <h1>User Login</h1></Link>
        </div>
    )
}
export default  LandingPage;