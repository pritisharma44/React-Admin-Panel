import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="body1">
                Welcome to the admin dashboard. Here you can manage users, settings, and view analytics.
            </Typography>
        </Box>
    );
};

export default Dashboard;