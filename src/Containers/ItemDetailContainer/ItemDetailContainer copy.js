import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"
import ClipLoader from "react-spinners/ClipLoader";


export const ItemDetailContainer = () => {
    
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();



const URL_BASE = 'https://fakestoreapi.com/products';
const URL_PRODUCTO = `${URL_BASE}/${id}`


useEffect(()=>{
    setTimeout(() => {
        fetch(URL_PRODUCTO)
        .then(res=>res.json())
        .then(json=>setProductos(json))
        .catch((error)=>{console.log(error);})
        .finally(setLoading(false))
    }, 2000);
},[id]);


    return (
        <>
        <div className='container'>
            {loading ?     <ClipLoader
                             loading={loading}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            /> 
                      : <ItemDetail productos={productos}/>}  
        </div>      
        </>
    )
}

