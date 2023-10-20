import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import DataContext from "../../DataContext";

const ProductsBox = () => {
  const value = useContext(DataContext)

    return(
        <Box marginY={5}>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
              {/** TO FIX: problem with mapping */}
                {value.products.map((product,index) => <ProductCard key={index} product={product}/>)}  
            </Grid>
        </Box>
    );
}

export default ProductsBox;