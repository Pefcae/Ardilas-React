import React, {  useContext } from 'react'
import {CartContext} from "../../Context/CartContext"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export const Cart = () => {
  const {cart,deleteItem,total,clear} =useContext (CartContext);
  return (
    <>
    {cart.length===0 ? (
       <h1>
         No hay productos en el carrito,  <Link to="/">ir al home</Link>
      </h1>
       
    ):(
    
      <>
      <div className="container">
        
        <Table striped hover>
          <thead>
            <tr>
              <th></th>
              <th>Cantidad</th>
              <th>Importe</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => {
              return (
                <tr  key={producto.id}>
                  <td>
                    <div className="itemNc">
                      <img className="itemImgC" src={producto.image} alt={producto.title} />
                      <div className="contenedorDescrip">
                        <p className="tituloDesc">{producto.title}</p>
                        <p>Precio por unidad: {producto.price}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorCant">
                      <p className="tituloCant">{producto.cantidad}</p>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorImporte">
                      <p className="tituloImporte">
                      {producto.cantidad * producto.price}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorCant">
                      <button className="btn-trush" onClick={() => deleteItem(producto.id)}>x</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="tFooter">
            <tr>
              <td colSpan={2} className="total">
                Total
              </td>
              <td className="total">${total}</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={1} className="derecha"></td>
              <td>
                <Button
                  onClick={() => clear()}
                  className="buttonSize"
                  variant="light"
                >
                  Vaciar Carrito
                </Button>
              </td>
              <td>
                <Link to={`/`}>
                  <Button className="buttonSize" variant="dark">
                    Seguir Comprando
                  </Button>
                </Link>
              </td>
              <td>
              <Link to="/Checkout">
                  <Button
                    className="buttonSize"
                    variant="dark"
                  >
                    Terminar Compra
                  </Button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </Table>
        
      </div>
    </>
    )
    }
    </>
   )
   
}


