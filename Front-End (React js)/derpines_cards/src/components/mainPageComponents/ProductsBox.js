import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import DataContext from "../../DataContext";
import CombineProducts from "../../generalFunctions/CombineProducts";

const ProductsBox = () => {
  const value = useContext(DataContext)

  const shortedProducts = CombineProducts(value.products)

    return(
        <Box marginY={5}>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
              {/** TO FIX: problem with mapping */}
                {shortedProducts.map((product,index) => <ProductCard key={index} product={product}/>)}  
            </Grid>
        </Box>
    );
}

export default ProductsBox;