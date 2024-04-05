import React from 'react';
import {
    Route,
    Routes,
  } from "react-router-dom";
import MainLayout from '../Views/Layout';
import Home from '../Pages/Home';
import InsultPage from '../Pages/GuiMode';

  

export const BRouter = () => {
    return(
        <Routes>
            <Route element={<MainLayout />} >
                <Route path="/" element={<InsultPage />} />
                <Route path="/quiz" element={<Home />} />
            </Route>
        </Routes>
    )   
}
  
  



