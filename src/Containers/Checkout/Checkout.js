import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import {db} from "../../firebase/firebase";
import { collection, addDoc,doc,updateDoc} from "firebase/firestore"
import { Formik, Field, Form } from "formik";
import Swal from 'sweetalert2'
import './checkout.css'



const TerminaCompra = () => {

  const {total, cart, clear} = useContext(CartContext);
  const [disable, setDisable] = React.useState(true);

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

    setFormData( {...formData, [e.target.name]: e.target.value})
  }

 

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, 'ordenes')
    const orderDoc = await addDoc(collectionOrder, newOrder)


      

      Swal.fire({
        title: '¡Muchas gracias por confiar en nosotros! ',
        text: 'Por favor comuníquese al 11-1234-1234 para acordar el pago y envío de la mercadería. Su número de pedido es: ' + orderDoc.id,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMYsFXSaA81O6EB6r18ugpY93jr4Pj-N5LA&usqp=CAU',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 4500,
        timerProgressBar: true
      })

        

      
  }

  const canceloCompra = () =>{
    Swal.fire({
      title: '¡Compra cancelada! ',
      text: 'Esperamos que vuelva pronto',
      imageUrl: 'https://ayudawp.com/wp-content/uploads/2017/09/abandono-de-carrito-woocommerce-e1505139963303.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 4500,
      timerProgressBar: true
    })
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
       //   confirmarCompra()
         
        }}
      >
        <Form>
  
          <label htmlFor="firstName">Nombre y Apellido</label>
          <Field onChange={changeForm} name="name" type="text" required    placeholder="nombre y apellido"  value={formData.name} />
          
          <label htmlFor="email">Email</label>
          <Field onChange={changeForm} name="email" type="email" required pattern=".+@.+.com"  placeholder="email yyy@zzz.com" value={formData.email}/> 
          <div className= "validationContainer"> 
            <button type="submit">Validar datos</button>
          </div>
        </Form>
      </Formik>
      
      <div className= "SalesContainer">

      <Link to={`/`}>
          <button className= "btnCancel" onClick={()=> canceloCompra()} >Cancelar Compra</button>
        </Link>

      <Link to={`/`}>
          <button className= "btnOk" disabled={disable}   onClick={()=> confirmarCompra()} >Confirmar Compra</button>
        </Link>
       
        </div>

    </div>
       

    }
    </>
  );
};

export default TerminaCompra;