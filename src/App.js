import React from "react";
import "./App.css";
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/CartView/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () =>{

  const mensaje = "Bienvenidos al sitio de Ardilas!";


  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>      
    </>
  );
}

export default App;