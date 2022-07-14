import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { pictureUrl, title, price } = product;
    return (
        <div className="gral-container">

            <div className="title-img">
                <h5>{title}</h5>
                <img className="" src={pictureUrl} alt={title} />
            </div>

            <div className="price-more">
                <span>{price}</span>
                <Link to={`/item/${product.id}`}>See more</Link>
            </div>

        </div>
    );
};

export default Item;
