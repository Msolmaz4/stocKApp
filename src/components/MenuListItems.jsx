import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Box, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const icon = (name) => `/assets/navbar/${name}.svg`;
const links = [
  {
    // icon:"/assets/navbar/ic.analytics.svg",
    icon: icon("ic_analytics"),
    title: "Dashboard",
    url: "/stock",
  },
  {
    title: "Purchases",
    icon: icon("purchase"),
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: icon("sales"),
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: icon("firms"),
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: icon("brand"),
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: icon("ic_cart"),
    url: "/stock/products/",
  },
];






export const MenuListItems = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    console.log(pathname)
  return (
    
        <div>
          <Toolbar />
         
          <List>
          {links.map((link, index) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton onClick={()=>navigate(link.url)}>
              <ListItemIcon >
              <Box
                  sx={{
                    // backgroundImage: `url(${link.icon})`,
                    width: 24,
                    height: 24,
                    backgroundColor:"currentColor",
                    mask: `url(${link.icon}) no-repeat center / contain`,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
          </List>
          
        </div>
      
  )
}
