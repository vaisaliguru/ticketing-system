import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import IncidentManagement from './IncidentManagement';
import TaskAssignment from './TaskAssignment';
import Notifications from './Notifications';
import ReportsAnalytics from './ReportsAnalytics';
import UserManagement from './UserManagement';
import Login from './Login';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Ensure it's a boolean

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login status
    window.location.href = '/login'; // Redirect to login page
  };

  useEffect(() => {
    console.log('Login status checked:', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">Ticketing System</div>
          {isLoggedIn && (  // Show navigation links only if logged in
            <nav className="nav-links">
              <Link to="/">Dashboard</Link>
              <Link to="/incident-management">Incident Management</Link>
              <Link to="/task-assignment">Task Assignment</Link>
              <Link to="/notifications">Notifications</Link>
              <Link to="/reports-analytics">Reports and Analytics</Link>
              <Link to="/user-management">User Management</Link>
              <button onClick={handleLogout} style={{ marginLeft: '20px', cursor: 'pointer' }}>Logout</button>
            </nav>
          )}
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/incident-management" element={isLoggedIn ? <IncidentManagement /> : <Navigate to="/login" />} />
          <Route path="/task-assignment" element={isLoggedIn ? <TaskAssignment /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={isLoggedIn ? <Notifications /> : <Navigate to="/login" />} />
          <Route path="/reports-analytics" element={isLoggedIn ? <ReportsAnalytics /> : <Navigate to="/login" />} />
          <Route path="/user-management" element={isLoggedIn ? <UserManagement /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
