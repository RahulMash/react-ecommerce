import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter, Route,Router, Routes } from 'react-router-dom';
import Userregistration from './Userregistration';
import Productcategory from './Productcategory';
import Products from './Products';
import Homepage from './Homepage';
import Wishcartorder from './Wishcartorder';
import { Button } from 'react-bootstrap';
import Menubar from './Menubar';
import ImageUploadForm from './ImageUploadForm';
function App() {
  return (
    <div className="App">
      <Menubar/>
      {/* <BrowserRouter > */}
        <Routes>
          
          <Route path='/register' element={<Userregistration />} />
          <Route path='/product-category' element={<Productcategory />} />
          <Route path='/products' element={<Products />}/>
          <Route path='/homepage' element={<Homepage />}/>
          <Route path='/wishcartorder' element={<Wishcartorder/>} />
          <Route path='/imageForm' element={<ImageUploadForm/>} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
