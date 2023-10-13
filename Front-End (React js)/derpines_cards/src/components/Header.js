import { AppBar, Box, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material';
import logo from '../assets/images/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <AppBar position="static" style={{backgroundColor: 'transparent', boxShadow: 'none'}} >
        <Toolbar>
          <div>
            <IconButton >
              <InstagramIcon color='iconColor'/>
            </IconButton>
          </div>

          <div variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            <img src={logo} alt='logo' style={{height: "120px"}}/>
          </div>
  
          <div>
            <IconButton >
              <ShoppingCartIcon color='iconColor' />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
}

export default Header;