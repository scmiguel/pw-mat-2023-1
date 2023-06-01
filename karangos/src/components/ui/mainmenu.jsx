import * as React from 'react';
import {Menu,MenuItem,IconButton,Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <IconButton edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2 }}
            id="basic-button" 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
        <Link to='/'>
            <MenuIcon/>
        </Link>
        </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link onClick={handleClose} component={Link} to='/'>
            <MenuItem onClick={handleClose}>Menu Inicial</MenuItem>
        </Link>
        <Link onClick={handleClose} component={Link} to='/customers'>
            <MenuItem onClick={handleClose}>Clientes</MenuItem>
        </Link>
        <Link onClick={handleClose} component={Link} to='/cars'>
            <MenuItem onClick={handleClose}>Carros</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}