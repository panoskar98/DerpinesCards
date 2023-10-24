import { Copyright } from "@mui/icons-material";
import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box component="footer" sx={{bottom: 0}}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Derpine's Cards
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Handmade Creations With Love
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">
                        panagiotis
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
}
export default Footer;