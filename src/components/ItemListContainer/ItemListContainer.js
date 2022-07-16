import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryID } = useParams();
    // console.log({ categoryID })

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then(data => {
                if (categoryID) {
                    setProducts(data.filter((p) => p.category === categoryID))
                } else {
                    setProducts(data)
                }
            })
    };


    useEffect(() => {
        setTimeout(() => {
            getProducts()
            setLoading(false)
        }, 2000);
    }, [categoryID]);

    // console.log({ products })


    return (
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            {loading ? <span>cargando...</span> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;




//ACÁ VA TODA LA LÓGICA => Puedo hacer la petición

/* Este es el contenedor de la tienda, itemList: contenedor de cards, y el Item es la card en sí*/

//item list container es 1er pantalla, donde veo todo
//itemList solo hace el map!!
//item solo la vista de la card!!
//item detalle contenedor, 2da pantalla, va a estar el contador con la descripción