import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import { colorPalette } from 'customTheme';

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen
}) => {
  return (
    <AppBar
      sx={{
        position: 'static',
        background: colorPalette.primary[500],
        width: '100%'
      }}
    >
      <Toolbar sx={{justifyContent: "space-between"}}>
        <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon sx={{color: "white", fontSize: 35}}/>
            </IconButton>
            <Box>
                <Typography variant='h5'>Engenuity</Typography>
            </Box>
        </FlexBetween>
        <FlexBetween gap="1.5rem">
                <Typography variant='h6'>Alex Martin</Typography>
                <Avatar alt="Cindy Baker" src="/https://mui.com/static/images/avatar/3.jpg"/>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
