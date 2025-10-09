import '../styles/LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="LandingPage">
            {/* Admin Login Link */}
            <Link to="/admin-login" className="landing-link">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LJEvl8LlkqsUNZj4APMG28PMvqDbqqB-BA&s" 
                    alt="Admin Login" 
                />
                <h1>Admin Page</h1>
            </Link>

            {/* User Login Link */}
            <Link to="/user-login" className="landing-link">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" 
                    alt="User Login" 
                />
                <h1>User Login Page</h1>
            </Link>
        </div>
    );
}

export default LandingPage;
