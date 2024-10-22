import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Sidebar />
            <Box
                component="main"
                // sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginTop: 8 }}
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                    ml: '240px',
                    mt: '64px',  
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;