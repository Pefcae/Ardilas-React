import React, { useContext } from 'react'
import {CartContext} from "../../Context/CartContext"
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css'


export const CartWidget =()=>{
    const {qty} = useContext (CartContext);
    return (
        <>

        <span className="badge bg-dark text-white ms-1 rounded-pill" id="ContadorCarrito">{qty > 0 && <span> {qty}</span>}</span>
        <ShoppingCartSharpIcon color="black" sx={{ fontSize: 40 }}/>

        </>
    );
}

export default CartWidget;

