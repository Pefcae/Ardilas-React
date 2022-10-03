import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export const CartWidget =()=>{
    return (
        <button>
            <ShoppingCartIcon color="primary" sx={{ fontSize: 40 }}/>
        </button>
    )
}

export default CartWidget;