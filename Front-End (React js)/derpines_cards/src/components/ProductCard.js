import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import logo from "../assets/images/logo.png"
import customTheme from "../Themes/CustomTheme";

const ProductCard = () => {
    return(
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={8} sx={{width: "250px", borderRadius: "10px"}}>
                <img style={{width: "100%", height: "12rem"}} src={logo} alt="product" />
                <Box padding={"4px"} color={customTheme.palette.dark2.main} justifyContent={"center"} sx={{backgroundColor: customTheme.palette.secondary.main, borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                    <Typography variant="subtitle1" component="h2" align="center">
                        Product Name
                    </Typography>
                </Box>
                <Box paddingX={"4px"} paddingBottom={"4px"} sx={{backgroundColor: customTheme.palette.secondary.main}} display="flex" justifyContent="space-between">
                   <Button variant="outlined" color="dark2" >Add To Cart</Button> 
                   <Button variant="outlined" color="dark2" >Modify</Button> 
                </Box>
            </Paper>
        </Grid>
    );
}

export default ProductCard;