import React from 'react';
import Item from './Item';
import products from '../products.json';


const ItemList = ({ items }) => {
    return (
        <div className='cardsMap'>
            {items.map((el) => (<Item{...el} />))}
            {/* // id={id}
                // price={price}
                // description={description}
                // category={category}
                // image={image}

                // {...{ id, price, description, category, image}} */}


        </div>
    )
};

export default ItemList;