import React, { useEffect, useState } from "react";
import ItemList from "../../Containers/ItemList/ItemList.js"
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



const ItemListContainer = (mensaje) =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id}=useParams();

    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CATEGORIA = `${URL_BASE}/category/${id}`





    useEffect(()=>{
        setLoading(true);
    },[id]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await fetch(id === undefined ? URL_BASE : URL_CATEGORIA);
            const data = await res.json();
            setProductos(data);
          } catch {
            console.log("error");
          } finally {
            setLoading(false);
          }
        };
        getProducts();
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

