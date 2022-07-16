import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    // console.log({ id })

    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data => {
                setProduct(data)
            })
    };


    useEffect(() => {
        getProducts()
    }, [])



    return (
        <div className='itemDetailContainer'>
            <h2>{greeting}</h2>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer