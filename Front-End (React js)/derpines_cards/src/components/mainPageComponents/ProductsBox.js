import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import DataContext from "../../DataContext";
import CombineProducts from "../../generalFunctions/CombineProducts";

const ProductsBox = () => {
  const value = useContext(DataContext);

  const products = CombineProducts(value.products);

  // Sort the products by type
  const sortedProducts = products.sort((a, b) => a.type.localeCompare(b.type));

  // Group products by type
  const groupedProducts = sortedProducts.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {});

  console.log(groupedProducts);

  return (
    <Box >
      {Object.keys(groupedProducts).map((type) => (
        <Box key={type} className="glass" padding={3} margin={4}>
          <Box display="flex" justifyContent="left" marginBottom={3}>
            <Typography variant="h4">
              {type + 's'}
            </Typography>
          </Box>
          <Grid container spacing={5} justifyContent="center" alignItems="center">
            {groupedProducts[type].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default ProductsBox;