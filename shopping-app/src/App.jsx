// import "./App.css"
import AdminLogin from "./components/AdminLogin";
import AdminSign from "./components/AdminSign";
import AdminHomePage from "./components/AdminHomePage";
import LandingPage from "./components/LandingPase"; 
import UserLogin from './components/UserLogin';
import UserSign from "./components/UserSign";
import ErrorPage from "./components/ErrorPage";   // ✅ Add this line
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap

function App() {
  return (   
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<ErrorPage />} />   {/ ✅ 404 fallback */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-sign" element={<AdminSign />} />
          <Route path="/user-sign" element={<UserSign />} />
          <Route path="/admin-HomePage/*" element={<AdminHomePage />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;