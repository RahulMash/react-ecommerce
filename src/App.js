import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userregistration from './Userregistration';
import Productcategory from './Productcategory';
import Products from './Products';
import Homepage from './Homepage';
import Wishcartorder from './Wishcartorder';
import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Userregistration />} />
          <Route path='/product-category' element={<Productcategory />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/homepage' element={<Homepage />}/>Wishcartdelete
          <Route path='/wishcartorder' element={<Wishcartorder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
