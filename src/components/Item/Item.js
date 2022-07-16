import React from 'react';
import './Item.css';

import { Link } from 'react-router-dom';


const Item = ({ product }) => {
    // console.log(product)
    return (
        <Link to={`/detail/${product.id}`}>
            <div className="gral-container">
                <div className="title-img">
                    <h5>{product.title}</h5>
                    <img src={product.image} alt="" />
                    <p>{product.category}</p>
                </div>
                <div className="price-more">
                    <span>{product.price}</span>
                    {/* <Link to={`/item/${product.id}`}>See more</Link> */}
                </div>

            </div>
        </Link>
    )
}

export default Item