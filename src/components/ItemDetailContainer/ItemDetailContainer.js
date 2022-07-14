import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = ({ greeting }) => {

    const [productDetail, setProductDetail] = useState({ Loader: true });

    useEffect(() => {
        const getItem = async () => {
            try {
                const resp = await fetch(`https://fakestoreapi.com/products/${1}`)
                const data = await resp.json();
                setProductDetail(data)
                // console.log(data)

            } catch (error) {
                console.log(error)
            }
        }

        setTimeout(() => {
            getItem()

        }, 2000);

    }, [])


    return (
        <div className='itemDetailContainer'>
            <h2>{greeting}</h2>
            <ItemDetail product={productDetail} />
        </div>
    )
}

export default ItemDetailContainer