import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import { Home, Settings, Dashboard, People } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      {/* Toolbar as spacing for AppBar height */}
      {/* <Toolbar /> */}
      <Box sx={{ textAlign: "center", p: 2 }}>
        {/* Add Logo Here */}
        {/* <img src="/path-to-your-logo.png" alt="Logo" style={{ width: '80%', height: 'auto' }} /> */}
        <Typography variant="h6" component="div">
          Admin Panel
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ overflow: "auto" }}>
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
      </Box>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
