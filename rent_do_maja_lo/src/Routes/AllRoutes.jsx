import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import FurniturePage from "../Pages/FurniturePage";
import ElectronicsPage from "../Pages/ElectronicsPage"
import FitnessPage from "../Pages/FitnessPage"
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Pages/Cart";
import PrivateRoute from "./PrivateRoute";
import SingleElectronicsPage from "../Pages/SingleElectronicsPage";
import SingleFitnes from "../Pages/SingleFitnes";
import CheckoutPage from "../Pages/CheckoutPage";
import Admin from "../Pages/Admin";

export default function AllRoutes(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/furniture" element={<FurniturePage />}/>
        <Route path="/electronics" element={<ElectronicsPage />}/>
        <Route path="/fitness" element={<FitnessPage />}/>
        <Route path="/product/:id" element={<SingleProductPage />}/>
        <Route path="/electronics/:id" element={<SingleElectronicsPage />}/>
        <Route path="/fitness/:id" element={<SingleFitnes />}/>
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>}/>
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>}/>
        


      
      </Routes>
    </>
  );
}
