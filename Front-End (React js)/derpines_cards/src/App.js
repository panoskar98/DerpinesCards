import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import { Route, Routes } from 'react-router-dom';
import products from './assets/experimentalData/products.json'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage products={products}/>} />
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
