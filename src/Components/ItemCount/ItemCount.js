import React, {useState} from 'react';
import './ItemCount.css'

export const ItemCount = ({stock, onAdd, inicial}) => {
    const [contar, setContar] = useState(inicial);

    const agregarContador = ()=>{
        if(contar<stock){
            setContar(contar+1);
        }

    }
    const restarContador = ()=>{
        if(contar>1){
            setContar(contar-1);
        }
    }
    const agregarAlCarrito = ()=>{
        if(stock!==0){
            onAdd(contar);
            
        }
    }
    return (
        <div className='contadorProductos'>
            <div className='contador'>
                <button onClick={restarContador}>
                    <span className="button_top">-
                    </span>
                 </button>
                <p>{contar}</p>
                <button onClick={agregarContador}>
                    <span className="button_top">+
                   </span>
                </button>
            </div>
            <div className='contador2'>
                <button disabled={stock===0} onClick={agregarAlCarrito}>{
                     stock === 0 ? 
                         <span className="button_top">no tenemos productos</span>  : 
                         <span className="button_top">Agregar al Carrito</span> 
                         }
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
