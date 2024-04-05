import React from 'react';
import {
    Route,
    Routes,
  } from "react-router-dom";
import MainLayout from '../Views/Layout';
import Home from '../Pages/Home';

  

export const BRouter = () => {
    return(
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )   
}
  
  



