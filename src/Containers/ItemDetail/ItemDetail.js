import React, { useState, useContext } from 'react'
import ItemCount from '../../Components/ItemCount/ItemCount.js'
import "./ItemDetail.css"   
import {Link} from "react-router-dom"
import {CartContext} from "../../Context/CartContext"


export const ItemDetail = ({productos}) => {

   const [agregarCarrito, setAgregarCarrito] = useState(true);
   
   const {addItem} =useContext (CartContext);
//   const resultado =useContext (Context);



    const onAdd = (numero)=>{
        addItem(productos,numero)
        setAgregarCarrito(false);
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


//reemplazar id por stock