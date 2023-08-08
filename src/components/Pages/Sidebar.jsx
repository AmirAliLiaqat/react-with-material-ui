import React from 'react';
import { NavLink } from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BookIcon from '@mui/icons-material/Book';
import ListIcon from '@mui/icons-material/List';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CountertopsIcon from '@mui/icons-material/Countertops';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [toggle, setToggle] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleMenu = () => {
    setToggle(current => !current);
  }
    
  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader" subheader={ 
        <ListSubheader component="div" id="nested-list-subheader" style={{position: "unset", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          Pages <MenuIcon sx={{cursor: 'pointer'}} onClick={toggleMenu} />
        </ListSubheader>
      }>
        <NavLink to="/" className="text-decoration-none text-dark">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" hidden={toggle} />
          </ListItemButton>
        </NavLink>
        <Divider />

        <NavLink to="/about" className="text-decoration-none text-dark">
          <ListItemButton>
            <ListItemIcon>
              <AdUnitsIcon />
            </ListItemIcon>
            <ListItemText primary="About" hidden={toggle} />
          </ListItemButton>
        </NavLink>
        <Divider />

        <NavLink to="/services" className="text-decoration-none text-dark">
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" hidden={toggle} />
          </ListItemButton>
        </NavLink>
        <Divider />

        <NavLink to="/blog" className="text-decoration-none text-dark">
          <ListItemButton>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" hidden={toggle} />
          </ListItemButton>
        </NavLink>
        <Divider />

        <NavLink to="/contact" className="text-decoration-none text-dark">
          <ListItemButton>
            <ListItemIcon>
              <AddIcCallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" hidden={toggle} />
          </ListItemButton>
        </NavLink>
        <Divider />

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" hidden={toggle} />
            <div className="expandToggle" hidden={toggle}>{open ? <ExpandLess /> : <ExpandMore />}</div>
        </ListItemButton>
        <Divider />

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/todoList" className="text-decoration-none text-dark">
                <ListItemButton className={(toggle === true) ? "ps-3" : "ps-4"}>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Todo List" hidden={toggle} />
                </ListItemButton>
              </NavLink>
              <Divider />

              <NavLink to="/weatherApp" className="text-decoration-none text-dark">
                <ListItemButton className={(toggle === true) ? "ps-3" : "ps-4"}>
                  <ListItemIcon>
                    <ThermostatIcon />
                  </ListItemIcon>
                  <ListItemText primary="Weather App" hidden={toggle} />
                </ListItemButton>
              </NavLink>
              <Divider />

              <NavLink to="/quizApp" className="text-decoration-none text-dark">
                <ListItemButton className={(toggle === true) ? "ps-3" : "ps-4"}>
                  <ListItemIcon>
                    <ThermostatIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quiz App" hidden={toggle} />
                </ListItemButton>
              </NavLink>
              <Divider />

              <NavLink to="/counter" className="text-decoration-none text-dark">
                <ListItemButton className={(toggle === true) ? "ps-3" : "ps-4"}>
                  <ListItemIcon>
                    <CountertopsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Counter" hidden={toggle} />
                </ListItemButton>
              </NavLink>
              <Divider />

              <NavLink to="/chatCounter" className="text-decoration-none text-dark">
                <ListItemButton className={(toggle === true) ? "ps-3" : "ps-4"}>
                  <ListItemIcon>
                    <MarkUnreadChatAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat Counter" hidden={toggle} />
                </ListItemButton>
              </NavLink>
              <Divider />
            </List>
        </Collapse>
      </List>
    </>
  )
}

export default Sidebar;
