import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/images/logo.png'
import Basket from "./Basket";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    return (
        <Box display="flex" justifyContent= "space-between" padding={1} alignItems="center">
            <InstagramIcon />
            <img style={{height: "100px"}} src={logo} alt="logo" onClick={() => navigate('/products')}/>
            <Basket/>
        </Box>
    );
}

export default Header;