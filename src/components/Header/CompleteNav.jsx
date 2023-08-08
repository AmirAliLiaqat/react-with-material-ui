import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import GroupIcon from '@mui/icons-material/Group';
import Logout from '@mui/icons-material/Logout';
import Close from '@mui/icons-material/Close';
import Camera from '@mui/icons-material/CameraAlt';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';

export default function CompleteNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="xl" sx={{padding: "10px", background: '#ccc'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center' }}>
        <NavLink to="/" className="text-decoration-none text-dark">
          <AlignHorizontalRightIcon />&nbsp;React App
        </NavLink>
        <Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            // onClose={handleClose}
            // onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          > 
            <Box sx={{padding: '15px', display: "flex", justifyContent: "space-between"}}>
              <Box>
                <Box component="h6">User Settings</Box>
                <Box component="span">r.angier@gmail.com</Box>
              </Box>
              <Close onClick={handleClose} sx={{cursor: 'pointer'}}/>
            </Box>

            <Box sx={{padding: "20px", textAlign: "center"}}>
              <Button variant='contained' color='action' sx={{padding: '70px', borderRadius: '50%'}}><Camera/></Button>
            </Box>

            <MenuItem>
              <Box>
                <TextField
                  id="standard-required"
                  label="Dispaly Name"
                  variant="standard"
                  defaultValue="Robert Angier"
                />
                <Button variant="contained" color='action' onClick={handleClose}>Save</Button>
              </Box>
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
              <NavLink to="/userManagement" className="text-decoration-none text-dark">
                <ListItemIcon>
                  <GroupIcon fontSize="small" />
                </ListItemIcon>
                User management
              </NavLink>
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Container>
  );
}