import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import { Route, Routes } from 'react-router-dom';
import DataContext from './DataContext';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';

function App() {
  const[products,setProducts] = useState(null)

  function getProducts() {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data)
    })
  }

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
      <DataContext.Provider value={{ products, getProducts}}>
        <Routes>
          <Route path='/*' element={<MainPage products={products} />} />
          <Route path='/admin/*' element={<AdminPage />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
