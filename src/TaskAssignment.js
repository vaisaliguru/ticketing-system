import React from 'react';

const tasks = [
    { id: 1, title: 'Fix Network Outage', assignedTo: 'John Doe', dueDate: '2024-10-01', status: 'In Progress' },
    { id: 2, title: 'Resolve Software Bug', assignedTo: 'Jane Smith', dueDate: '2024-10-03', status: 'Not Started' },
    { id: 3, title: 'Replace Hardware', assignedTo: 'Mike Johnson', dueDate: '2024-09-30', status: 'Completed' },
    { id: 4, title: 'Investigate User Account Issue', assignedTo: 'Emily Davis', dueDate: '2024-10-05', status: 'Not Started' },
    { id: 5, title: 'Prepare Server for Maintenance', assignedTo: 'Anna Brown', dueDate: '2024-10-02', status: 'In Progress' },
];

function TaskAssignment() {
  return (
    <div className="page">
      <h1>Task Assignment</h1>
      <p>Assign tasks to team members and track their progress.</p>
      <p>This section allows you to view current tasks and their status.</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskAssignment;
