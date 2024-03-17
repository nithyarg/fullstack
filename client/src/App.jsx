import './App.css'

import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout";
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import React from 'react';
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:4000"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<IndexPage/>}/>
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/register" element={<RegisterPage/>} />
      </Route>
     
    </Routes>
  
  )
}

export default App
