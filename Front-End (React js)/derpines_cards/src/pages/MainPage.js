import { Box, Container, ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import customTheme from "../Themes/CustomTheme";
import ProductsBox from "../components/ProductsBox";
import Footer from "../components/Footer";

const MainPage = (props) => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ backgroundColor: customTheme.palette.primary.main }}>
                <Container maxWidth="lg">
                    <Header />
                    <ProductsBox products={props.products}/>
                    <Footer />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default MainPage;