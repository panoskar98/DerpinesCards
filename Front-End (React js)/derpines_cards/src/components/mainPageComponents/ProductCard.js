import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png"
import customTheme from "../../Themes/CustomTheme";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return(
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Paper elevation={8} sx={{width: "250px", borderRadius: "10px"}}>
                <img style={{width: "100%", height: "12rem"}} src={props.product.img} alt="product" />
                <Box padding={"4px"} color={customTheme.palette.dark2.main} justifyContent={"center"} sx={{backgroundColor: customTheme.palette.primary.main, borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                    <Typography variant="subtitle1" component="h2" align="center">
                        {props.product.title}
                    </Typography>
                    <Typography variant="body2" component="h4">
                        {props.product.description}
                    </Typography>
                </Box>
                <Box paddingX={"4px"} paddingBottom={"4px"} sx={{backgroundColor: customTheme.palette.primary.main}} display="flex" justifyContent="space-between">
                   <Typography variant="subtitle1" component="h2" align="center">
                    {props.product.price + " €"}
                   </Typography>
                   <Button variant="outlined" color="dark2" >
                    <Link to={`/product/${props.product.productId}`} state={props.product} style={{textDecoration: "none"}}>
                    Modify
                    </Link>
                    </Button> 
                </Box>
            </Paper>
        </Grid>
    );
}

export default ProductCard;