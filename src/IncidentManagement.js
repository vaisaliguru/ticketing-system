import React from 'react';

const incidents = [
    { id: 1, title: 'Network Outage', status: 'Open', priority: 'High' },
    { id: 2, title: 'Software Bug', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Hardware Failure', status: 'Resolved', priority: 'Low' },
    { id: 4, title: 'User Account Issue', status: 'Open', priority: 'High' },
    { id: 5, title: 'Server Maintenance', status: 'In Progress', priority: 'Medium' },
];

function IncidentManagement() {
  return (
    <div className="page" style={{ marginTop: '60px' }}>
      <h1>Incident Management</h1>
      <p>Manage and track all reported incidents from creation to resolution.</p>
      <p>Here you can view, edit, and resolve incidents as needed.</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{incident.title}</td>
              <td>{incident.status}</td>
              <td>{incident.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidentManagement;
