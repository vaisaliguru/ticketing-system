import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <p>This is your custom React app where you can manage incidents and tasks efficiently.</p>
      <h2>Key Metrics</h2>
      <p>Total Incidents: 23</p>
      <p>Open Incidents: 10</p>
      <p>Resolved Incidents: 13</p>
      <h2>Recent Activities</h2>
      <ul>
        <li>Incident #1001 created - 2 mins ago</li>
        <li>Task #2001 assigned to John Doe - 5 mins ago</li>
        <li>Incident #1002 resolved by Admin - 10 mins ago</li>
      </ul>
    </div>
  );
}

export default Dashboard;
