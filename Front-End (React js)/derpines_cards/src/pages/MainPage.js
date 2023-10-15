import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import customTheme from "../Themes/CustomTheme";
import ProductsBox from "../components/ProductsBox";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <Box sx={{backgroundColor: customTheme.palette.primary.main}}>
            <Container maxWidth="lg">
             <Header/>
             <ProductsBox/>
             <Footer/>
            </Container>
        </Box>
    );
}

export default MainPage;