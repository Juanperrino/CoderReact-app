import React from 'react'
import '../Item/Item.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    // console.log({ products })
    return (
        <div className="item-list-container">


            {products.map((product) => <Item key={product.id} product={product} />)}

        </div>
    )
}

export default ItemList


