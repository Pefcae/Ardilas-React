import React, {  useContext } from 'react'
import {CartContext} from "../../Context/CartContext"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



export const Cart = () => {
  const {cart,deleteItem,total,clear} =useContext (CartContext);
  console.log(cart)
  return (
    <>
    {cart.length===0 ? (
      <h1>
         No hay productos en el carrito,  <Link to="/">ir al home</Link>
      </h1>
    ):(
      <>
      {cart.map((producto)=>(
          <>   

        
            <h1 key={producto.id}> Producto:  {producto.title}  cantidad: {producto.cantidad} precio unitario: {producto.price} Subtotal: {producto.cantidad * producto.price} </h1>
            <button onClick={()=>deleteItem(producto.id)}>Eliminar producto</button>
            
        </>        
        ) )  }
          <>
            <h1>El total del carrito es {total}</h1>
            <button onClick={()=>clear()}>Vaciar carrito</button>
          </>
      </>
    )}
    </>
   )
   
}


