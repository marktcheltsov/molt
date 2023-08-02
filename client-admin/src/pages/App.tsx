import React from 'react';
import Layout from './main/layout';
import { Route, Routes } from "react-router-dom"
import Login from './login';
import Signup from './register';
import Overwiev from './main/overwiev';
import '../index.css'
import Main from './main/main';
import Products from './main/products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Main />} />
      </Routes> 
    </div>
  );
}

export default App;
