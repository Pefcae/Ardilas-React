import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {db} from "../../firebase/firebase";
import { collection, addDoc,doc,updateDoc} from "firebase/firestore"



const TerminaCompra = () => {
  const [comprado, setComprado]=useState(0);
  const {total, cart, clear} = useContext(CartContext);
  const [ orderOk, setOrderOk ] = useState(false)
  const [order, setOrder] = useState({
    items: cart.map((producto) => {
        return {
          id:producto.id,
          title:producto.title,
          price:producto.price,
          cant: producto.cantidad
        }
    } ),
    comprador: {},
    date: new Date().toLocaleString(),
    total: total
}) 
const [formData,setFormData] = useState({
    name: '',
    phone: '',
    email:''
})
const validarForm = () =>{
  console.log("entre")
  return false
}

  const submitData = (e) =>{
    e.preventDefault ()
    if(validarForm())
        {pushData({...order, comprador: formData})
        actualizarStock()
        clear()
        setComprado(1)}
    else
    {
      console.log("corregí los datos")
    }
  }

  const changeForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, 'ordenes')
    const orderDoc = await addDoc(collectionOrder, newOrder)
    setOrderOk(orderDoc.id)
  }

  const canceloCompra = () =>{
    clear()
    setComprado(2)
  }


  const actualizarStock = () => {
    cart.forEach(item => {
        const product = doc(db, "productos", item.id);
        updateDoc(product, {stock: item.stock - item.cantidad})
    })
  }

  
  return (
    
    <>
      
    {
       
      comprado===0 && 
      <div className="container">
        <div className="mensajeCompra">
          <i className="fa-regular fa-face-smile-wink fa-7x"></i>
          <p className="textoMensajeCompra">
            Ultimo paso, dejanos tus datos de contacto para que puedas disfrutar tu compra!.
          </p>
          <div className="formRegistro">
            <Form onSubmit={submitData} >
              <Form.Group className="mb-3" controlId="Nombre">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control 
                    onChange={changeForm}
                    type="text" 
                    name="name"
                    placeholder="Pablo Federiconi" 
                    value={formData.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control 
                    name="phone"
                    type="phone" 
                    placeholder="+549 (11) 4141-8585" 
                    value={formData.phone}
                    onChange={changeForm}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>e-mail</Form.Label>
                <Form.Control 
                    onChange={changeForm}
                    type="email" 
                    name="email"
                    placeholder="Pablo@Federiconi.com" 
                    pattern=".+@.+.com"
                    value={formData.email}
                />
              </Form.Group>
              <div className="botonesCompra">
              <button onClick={()=> canceloCompra()} className="buttonComp" variant="light">
                  Cancelar Compra
                </button>
                <button  className="buttonComp" variant="dark" type="submit">
                  Realizar Compra
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>    
    }
    {comprado === 1 &&
      <div className="container">
        <div className="mensajeCompra">
          <i className="fa-regular fa-face-smile fa-7x"></i>
          <p className="textoMensajeCompra">Muchas Gracias por tu compra!!</p>
          <p className="textoMensajeCompra">
            Todo salió perfecto, el id de su compra es:<span className="ordenID">{orderOk}</span>, en breve nos contactaremos para coordinar el envío!
          </p>
          <Link to={`/`}>
            <Button className="buttonSize" variant="dark">
              Volver al Home
            </Button>
          </Link>
        </div>
      </div>
    }
    {comprado===2 && 
      <div className="container">
        <div className="mensajeCompra">
          <i className="fa-regular fa-face-frown fa-7x"></i>
          <p className="textoMensajeCompra">¡Será la próxima!</p>
          <p className="textoMensajeCompra">
            Su orden ha sido cancelada correctamente. Muchas gracias por visitarnos!
          </p>
          <Link to={`/`}>
            <Button className="buttonSize" variant="dark">
              Volver al Home
            </Button>
          </Link>
        </div>
      </div>
    }
    </>
  );
};

export default TerminaCompra;