import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import { Route, Routes } from 'react-router-dom';
import DataContext from './DataContext';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';

function App() {
  const [products,setProducts] = useState(null)
  const [orderProductIds, setOrderProductIds] = useState([])
  const [orderComments, setOrderComments] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.0)

  function getProducts() {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data)
    })
  }

  useEffect(() => {
    let total = 0;
    orderProductIds.forEach((id) => {
     const product = products.find(prod => prod.productId === id)
     total += Number(product.price);
    })
    setTotalPrice(total)
  },[orderProductIds])

  useEffect(() => {
    getProducts();
  },[])

  if (!products) return(
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
  );

  return (
    <div className='App'>
      <DataContext.Provider value={{ products, getProducts, orderProductIds, setOrderProductIds, orderComments, setOrderComments, totalPrice}}>
        <Routes>
          <Route path='/*' element={<MainPage products={products} />} />
          <Route path='/admin/*' element={<AdminPage />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
