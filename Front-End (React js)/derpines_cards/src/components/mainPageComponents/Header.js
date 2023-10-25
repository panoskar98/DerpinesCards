import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/images/logo.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Basket from "./Basket";

const Header = () => {
    return (
        <Box display="flex" justifyContent= "space-between" padding={1} alignItems="center">
            <InstagramIcon/>
            <img style={{height: "100px"}} src={logo} alt="logo" />
            <Basket/>
        </Box>
    );
}

export default Header;