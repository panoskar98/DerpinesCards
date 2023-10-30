import { Box, Button, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ProductCard = (props) => {
    const productRoute = props.product.title;
    return (
        <Grid item    
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
                className="glass" 
                width="250px"
                padding="8px"
            >
                <Box padding="5px">
                <img 
                    style={{ width: "100%", height: "12rem", borderRadius: "5px"}} 
                    src={props.product.img} 
                    alt="product" 
                />
                </Box>
                <Box>
                    <Typography variant="h6" component="h3" >
                        {props.product.title}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" component="h2" align="center">
                        {props.product.price + " €"}
                    </Typography>
                    <Button variant="outlined" color="dark2" >
                        <Link to={`/product/${productRoute}`} state={props.product} style={{ textDecoration: "none" }}>
                            Modify
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}

export default ProductCard;