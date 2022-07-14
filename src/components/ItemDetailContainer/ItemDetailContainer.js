import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = ({ greeting }) => {

    const [productDetail, setProductDetail] = useState({ Loader: true });
    const param = useParams()
    // console.log(param)



    useEffect(() => {
        const getItem = async () => {
            try {
                const resp = await fetch(`https://fakestoreapi.com/products/${param.idProduct}`)
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