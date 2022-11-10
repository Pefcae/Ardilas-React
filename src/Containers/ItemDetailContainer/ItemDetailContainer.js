import React, {useEffect, useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"
import ClipLoader from "react-spinners/ClipLoader";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";


export const ItemDetailContainer = () => {
    
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

const {id} = useParams();


useEffect(() => {
    const productCollection = collection(db, "productos");
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
      .then((result) => {
        setProductos({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));

  }, [id]);


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

