import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from '../products.json';

const ItemListContainer = ({ greeting }) => {

    // console.log(products);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(setLoading, 2000, false);
        console.log('useEffect');
    }, []);

    return (
        <div className='list'>
            <div className="list2">
                {greeting}
                {loading ? (<h4>Loading...</h4>) : (<ItemList items={products} />)}
                <ItemCount
                    stock={5}
                    initial={1}
                    onAdd={(n) => alert(`agregados ${n} productos`)}
                />
            </div>
        </div>
    )
}

export default ItemListContainer