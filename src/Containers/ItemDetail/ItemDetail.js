import React, { useState, useContext } from 'react'
import ItemCount from '../../Components/ItemCount/ItemCount.js'
import "./ItemDetail.css"   
import {Link} from "react-router-dom"
import {CartContext} from "../../Context/CartContext"
import Swal from 'sweetalert2'


export const ItemDetail = ({productos}) => {

   const [agregarCarrito, setAgregarCarrito] = useState(true);
   
   const {addItem} =useContext (CartContext);



    const onAdd = (numero)=>{
        addItem(productos,numero)
        setAgregarCarrito(false);
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
  
          Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito'
          })
  

    }
    
    return (

    <div className='detailContainer'>
        <h1 className='titulo'>{productos.title}</h1>
        <img src={productos.image} alt={productos.title} className='imagen'/>
        <p className='descripcion'>{productos.description} El stock es {productos.stock}</p>
        <div className='precio'>
            <p>${productos.price}</p>
            <div></div>
        </div>
        
        {agregarCarrito ? <ItemCount stock={productos.stock} onAdd={onAdd} inicial={1} className='contador'/> :  
                          <>
                          <Link to="/">    <button className='btnPef'>Seguir Compra</button></Link>;
                          <Link to="/cart"><button className='btnPef'>Finalizar Compra</button></Link>
                          </> 
        }  



    </div>
        
    )
}


