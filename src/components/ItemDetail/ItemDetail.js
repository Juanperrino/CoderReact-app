import React, { useState } from 'react'
import ItemCount from '../ItemCount'


const ItemDetail = ({ product }) => {

    const [newCount, setNewCount] = useState(0)

    const handleAdd = (count) => {
        setNewCount(count);
        console.log(`Se agregaron ${count} productos al carrito`) //Alert?
    }

    return (
        <div className='itemDetailCard'>
            <img src={product.image} alt={product.title} />
            <div className='descrptionItemDetailCard'>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p className='txtPrecio'> $ {product.price}</p>
                <p>Stock available {product?.rating?.count} unit</p>
                {(newCount <= 0) ?
                    <ItemCount handleAdd={handleAdd} initial={1} stock={product?.rating?.count} />
                    :
                    <h3> Checkout </h3>
                }
            </div>
        </div>
    )
}

export default ItemDetail