import React, { useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from '@mui/icons-material';

import CellTowerIcon from '@mui/icons-material/CellTower';
import TimelineIcon from '@mui/icons-material/Timeline';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { useEffect, useSate } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import { colorPalette } from 'customTheme';

const navItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    text: 'Towers Information',
    icon: <CellTowerIcon />,
  },
  {
    text: 'Financial',
    icon: <TimelineIcon />,
  },
  {
    text: 'Contractors',
    icon: <PermContactCalendarIcon />,
  },
  {
    text: 'Contacts Information',
    icon: <EngineeringIcon />,
  },
  {
    text: 'Environment health and safety',
    icon: <HealthAndSafetyIcon />,
  },
  {
    text: 'Transports',
    icon: <LocalShippingIcon />,
  },
  {
    text: 'Staff',
    icon: <Diversity3Icon />,
  },
  {
    text: 'Documentation',
    icon: <FolderIcon />,
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isDesktop,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  //   const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: colorPalette.secondary[100],
              backgroundColor: colorPalette.primary[500],
              boxSizing: 'border-box',
              borderWidth: isDesktop ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={colorPalette.secondary[500]}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Engenuity
                  </Typography>
                </Box>
                {!isDesktop && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <DashboardIcon />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                const simText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${simText}`);
                        setActive(simText);
                      }}
                      sx={{
                        backgroundColor:
                          active === simText
                            ? colorPalette.primary[100]
                            : 'transparent',
                        color:
                          active === simText
                            ? colorPalette.primary[900]
                            : '#fff',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '1rem',
                          color:
                            active === simText
                              ? colorPalette.primary[900]
                              : '#fff',
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === simText && (
                        <KeyboardArrowRightIcon
                          sx={{ ml: 'auto', color: colorPalette.primary[900] }}
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
