import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {db} from "../../firebase/firebase";
import { collection, addDoc,doc,updateDoc} from "firebase/firestore"
import { Formik, Field, Form } from "formik";
import Swal from 'sweetalert2'



const TerminaCompra = () => {

  const {total, cart, clear} = useContext(CartContext);
  const [disable, setDisable] = React.useState(true);

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
    email:''
})

  const submitData = (e) =>{

      pushData({...order, comprador: formData})
      actualizarStock()
        clear()


  }

  const changeForm = (e) => {

    setFormData({...formData, [e.target.name]: e.target.value})
  }

 

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, 'ordenes')
    const orderDoc = await addDoc(collectionOrder, newOrder)
    setOrderOk(orderDoc.id)

    Swal.fire({  title: "¡Muchas gracias por confiar en nosotros! Por favor comuníquese al 11-1234-1234 para acordar el pago y envío de la mercadería. Su número de pedido es: " + orderDoc.id})
  }

  const canceloCompra = () =>{
    clear()
  }

  const confirmarCompra = () =>{
    submitData()
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
      <div className="App">
      <h1>Dejanos tus datos para contactarnos</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));

          setFormData({...formData, values})
          setDisable(false)

        }}
      >
        <Form>
  
          <label htmlFor="firstName">Nombre y Apellido</label>
          <Field onChange={changeForm} name="name" type="text" required    placeholder="nombre y apellido"  value={formData.name} />
          
          <label htmlFor="email">Email</label>
          <Field onChange={changeForm} name="email" type="email" required pattern=".+@.+.com"  placeholder="email YYY@ZZZ.COM " value={formData.email}/> 

          <button type="submit">Validar datos</button>


       
        </Form>
      </Formik>
      
      <Link to={`/`}>
          <button disabled={disable}   onClick={()=> confirmarCompra()} >Confirmar Compra</button>
        </Link>

        <Link to={`/`}>
          <button  onClick={()=> canceloCompra()} >Cancelar Compra</button>
        </Link>
       
    </div>
       

    }
    </>
  );
};

export default TerminaCompra;