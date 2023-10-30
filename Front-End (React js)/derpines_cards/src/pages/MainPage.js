import { Box, Container, Paper, ThemeProvider } from "@mui/material";
import Header from "../components/mainPageComponents/Header";
import customTheme from "../Themes/CustomTheme";
import ProductsBox from "../components/mainPageComponents/ProductsBox";
import Footer from "../components/mainPageComponents/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductPage from "./ProductPage";

const MainPage = () => {
    const navigate = useNavigate()
    const [route, setRoute] = useState('/products')

    useEffect(() => {
        navigate(route)
    }, [route])

    return (
        <ThemeProvider theme={customTheme}>
            <Box className="gradient-background" height="100%" paddingY="10px" display="flex" flexDirection="column" minHeight="100vh">
                <Container maxWidth="lg">
                    <Box className="glass" padding="10px">
                        <Header />
                    </Box>
                    
                        <Routes>
                            <Route path="/products" element={<ProductsBox />} />
                            <Route path='/product/:title' element={<ProductPage />} />
                        </Routes>
                    
                    <Box className="glass" marginTop={4} padding="8px">
                        <Footer />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default MainPage;