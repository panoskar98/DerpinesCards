import { Box, Grid, Pagination, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductsBox = (props) => {
  const products = props.products
    return(
        <Box marginY={5}>
            <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Candles
          </Typography>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
              {/** TO FIX: problem with mapping */}
                {products.map((product,index) => <ProductCard key={index} product={product}/>)}  
            </Grid>
            <Box margin={3} display="flex" justifyContent="center">
            <Pagination count={10}/>
            </Box>
            <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Cards
          </Typography>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Grid>
        </Box>
    );
}

export default ProductsBox;