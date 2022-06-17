import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import Comments from './components/Comments';
import { Endmessage } from './components/Endmessage';
import Header from './components/Header';
// import index from 'App.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
// import Routes from './Routes';
import Cart from './components/Cart';
function App() {
  
  return (
    <>
    <Router basename="/YourStore">
    
    
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path="/cart" element={<Cart/>}></Route>    
    </Routes>
    
    
  </Router>
  </>
  );
}

export default App;
