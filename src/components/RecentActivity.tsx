import React from 'react';
import { Typography, Paper } from '@mui/material';

const RecentActivity: React.FC = () => {
  // Placeholder for recent activity
  const activities: string[] = [
    'Reviewed new client contract.',
    'Generated invoice for client XYZ.',
    'Updated case status for John Doe.',
  ];

  return (
    <Paper elevation={3} className="p-6">
      <Typography variant="h6" component="h2" gutterBottom>
        Recent Activity
      </Typography>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="mb-2">
            {activity}
          </li>
        ))}
      </ul>
    </Paper>
  );
}

export default RecentActivity;
