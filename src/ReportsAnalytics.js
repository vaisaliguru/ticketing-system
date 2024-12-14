// src/ReportsAnalytics.js
import React from 'react';

const reports = [
    { id: 1, title: 'Incident Resolution Time', date: '2024-09-30' },
    { id: 2, title: 'Task Completion Rate', date: '2024-09-29' },
    { id: 3, title: 'Incident Volume by Category', date: '2024-09-28' },
];

function ReportsAnalytics() {
    return (
        <div className="page">
            <h1>Reports and Analytics</h1>
            <p>Generate and view reports on incidents and tasks.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{report.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReportsAnalytics;
