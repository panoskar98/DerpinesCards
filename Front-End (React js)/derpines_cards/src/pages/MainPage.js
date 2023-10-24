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
            <Box className="gradient-background" sx={{ backgroundColor: customTheme.palette.primary.main }} height={"100vh"}>
                <Container maxWidth="lg">
                    <Box className="glass" padding="10px">
                        <Header />
                    </Box>
                    <Box className="glass" marginTop={4}>
                        <Routes>
                            <Route path="/products" element={<ProductsBox />} />
                            <Route path='/product/:id' element={<ProductPage />} />
                        </Routes>
                    </Box>
                    <Box className="glass" marginTop={4} padding="8px">
                        <Footer />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default MainPage;