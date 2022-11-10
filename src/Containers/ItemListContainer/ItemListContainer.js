import React, { useEffect, useState } from "react";
import ItemList from "../../Containers/ItemList/ItemList.js"
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {db} from "../../firebase/firebase"
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = (mensaje) =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id}=useParams();


    useEffect(()=>{
        setLoading(true);
    },[id]);



 
    

  
    useEffect(() => {

        const productsCollection = collection(db, 'productos');
        const q = id ? query(productsCollection, where('category', '==', id)) : productsCollection;

                getDocs(q)
                .then(res =>setProductos (res.docs.map(product =>({id: product.id, ...product.data()}))))
                .then((result) => {
            
                    const listProducts = result.docs.map((item) => {
                    return {
                        ...item.data(),
                        id: item.id,
                    };
                    });
                    setProductos(listProducts);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(setLoading(false));

    }, [id]);

    
    return(
        <>
               
        <h2 className="Titulo2">{mensaje.greeting}</h2>
        <div className="cardContainer">
            {loading ? 
               <ClipLoader
               loading={loading}
               size={150}
               aria-label="Loading Spinner"
               data-testid="loader"
             />
            : <ItemList productos={productos}/>} 
        </div>
        </>
    );
}

export default ItemListContainer;

