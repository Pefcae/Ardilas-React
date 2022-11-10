import React from "react";
import "./App.css";
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer.js"
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CustomtProvider} from "./Context/CartContext"
import TerminaCompra from './Containers/Checkout/Checkout';


const App = () =>{

  const mensaje = "¡Bienvenidos al sitio NO oficial de cuandros de fútbol!";


  return (
    
    <CustomtProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Checkout" element={<TerminaCompra />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>      
    </CustomtProvider>
    
  );
}

export default App;