import { ThemeProvider } from "@emotion/react";
import Header from "../components/mainPageComponents/Header";
import customTheme from "../Themes/CustomTheme";
import { Button, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function ProductPage() {
    const product = useLocation()
    // Todo: finish product page
    return (
        <ThemeProvider theme={customTheme}>
            <Container>
                <Header />
                <Button>button</Button>
                <Typography>dlsfkjalkdj</Typography>
            </Container>
        </ThemeProvider>
    )
}

export default ProductPage;