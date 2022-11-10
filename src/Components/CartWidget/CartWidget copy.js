import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartContext} from "../../Context/CartContext"


export const CartWidget =()=>{
    const {qty} = useContext (CartContext);
    return (
        <>
            {qty > 0 && <span> {qty}</span>}
            <ShoppingCartIcon color="black" sx={{ fontSize: 40 }}/>
        </>
    );
}

export default CartWidget;

