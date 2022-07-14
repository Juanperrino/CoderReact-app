import React from "react";
import '../Item/Item.css'
import Item from "../Item/Item";

const ItemDetail = ({ productos }) => {
    return (
        <div className="item-list-container">
            {productos.map((product) => {
                // console.log(product);
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemDetail;