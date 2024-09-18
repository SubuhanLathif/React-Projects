import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout : ', error.message);
      setError('Failed to logout');
    }
  }

  return (
      <div>
        {error && <p className='error-msg text-danger' style={{ fontSize: '0.8rem' }}>{error}</p>}
        <h6 className="mb-2 text-primary">WELLCOME</h6>
        {/* Conditional rendering for guest greeting */}
        {currentUser ? (
          //registered user
          <div className="col-12">
          <h1 className="display-2 fw-bold">{currentUser.email}</h1>
          <p>This is my Email Address. </p>
          <Link to='/update-profile'><button className="btn btn-primary px-4 rounded-1 me-1">Update Profile</button></Link>
          <button className="btn border bg-transparent border-primary text-primary border-2 px-4 rounded-1 ms-1" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          //guest
          <div className="col-lg-7 col-nd-10 col-12">
          <h1 className="display-1 fw-bold">Hello Guest</h1>
          <p>This application is a simple login and registration system built using <mark className="bg-primary text-white px-1">React and Firebase.</mark> Users can create an account and log in, and after a successful login, they are directed to the Home Page. On the Home Page, the user's email address is displayed, and they have the option to update their profile information. Additionally, a "Forgot Password" feature is available to help users reset their passwords. </p>
          <Link to='/login'><button className="btn btn-primary px-4 rounded-1 me-1">Login</button></Link>
          <Link to='/register'><button className="btn border bg-transparent text-primary border-primary border-2 px-4 rounded-1 ms-1">Resgiter</button></Link>
          </div>
        )}
      </div>
  );
};
