// src/Notifications.js
import React from 'react';

const notifications = [
    { id: 1, message: 'Incident #1001 created.', date: '2024-09-30' },
    { id: 2, message: 'Task #2001 assigned to you.', date: '2024-09-29' },
    { id: 3, message: 'Incident #1002 resolved by Admin.', date: '2024-09-28' },
];

function Notifications() {
    return (
        <div className="page">
            <h1>Notifications</h1>
            <p>View all notifications related to incidents and tasks.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map((notification) => (
                        <tr key={notification.id}>
                            <td>{notification.id}</td>
                            <td>{notification.message}</td>
                            <td>{notification.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Notifications;
