import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Callback from './components/Callback';
import AuthContext from './AuthContext';

function App() {
  const { user, setUser } = useContext(AuthContext);
  const isAuthenticated = user !== null;

  useEffect(() => {
    console.log('Authentication status changed:', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    console.log('Current user:', user);
  }, [user]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              {!isAuthenticated && <li><Link to="/register">Register</Link></li>}
              {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
              {isAuthenticated && <li><Link to="/logout">Logout</Link></li>}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
          </Routes>
          <div>
            Status: {isAuthenticated ? 'Logged in' : 'Not logged in'}
          </div>
        </main>
      </div>
    </Router>
  );
}

function HomePage({ isAuthenticated }) {
  return isAuthenticated ? (
    <div>Welcome to the home page!</div>
  ) : (
    <div>
      <h2>Welcome to our site!</h2>
      <p>Please register or login to continue.</p>
    </div>
  );
}

export default App;
