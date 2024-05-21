// App.tsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignInPage from './sign_in/SignIn';
import SignUpPage from './sign_up/SignUp';
import ProfilePage from './profile/ProfilePage';
import { UserProfile } from "@clerk/clerk-react";
import HomePage from './components/HomePage';
import Events from './components/Events';
import EventsList from './components/EventsList';
import "./globals.css";

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="container header__container">
            <Link to="/home" className="logo-link">
              <h1 className="logo">Task Manager</h1>
            </Link>
            <nav>
              <ul className="header__menu">
                <li>
                  <Link to="/signin" className="link">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup" className="link">Sign Up</Link>
                </li>
                <li>
                  <Link to="/profile" className="link">Profile</Link>
                </li>
                <li>
                  <Link to="/home" className="link">Home</Link>
                </li>
                <li>
                  <Link to="/events" className="link">Your Events</Link>
                </li>
                <li>
                  <Link to="/eventlist" className="link">Events</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventlist" element={<EventsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
