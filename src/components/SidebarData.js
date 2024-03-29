import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssessmentIcon from '@mui/icons-material/Assessment';


export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon/>,
    link: "/dashboard"
  },
  {
    title: "Home",
    icon: <HomeIcon/>,
    link: "/mainpage"
  },
  {
    title: "User Management",
    icon: <AppRegistrationIcon/>,
    link: "/admin"
  },
  {
    title: "Reports",
    icon: <AssessmentIcon/>,
    link: "/material"
  }
];
