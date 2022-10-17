import React from 'react'
import Item from '../Item/Item.js'

const ItemList = ({productos}) => {

    return (
    
        <>
            {
                productos.map((producto)=>{
                    return (
                    <Item key={producto.id} productos={producto}/>
                    )
                })
            }
        </>
    )
}

export default ItemList;
