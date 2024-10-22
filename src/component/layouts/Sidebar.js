import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, Box } from '@mui/material';
import { Home, Settings, Dashboard, People } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const drawerWidth = 240;

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            {/* Add a Toolbar component to give spacing below the AppBar */}
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/users">
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                    <ListItem button component={Link} to="/settings">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
};

export default Sidebar;