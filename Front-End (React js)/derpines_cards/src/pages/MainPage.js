import { Box, Container, ThemeProvider } from "@mui/material";
import Header from "../components/mainPageComponents/Header";
import customTheme from "../Themes/CustomTheme";
import ProductsBox from "../components/mainPageComponents/ProductsBox";
import Footer from "../components/mainPageComponents/Footer";

const MainPage = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={{ backgroundColor: customTheme.palette.primary.main }}>
                <Container maxWidth="lg">
                    <Header />
                    <ProductsBox />
                    <Footer />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default MainPage;