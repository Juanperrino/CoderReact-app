import React, { useEffect, useState } from "react";
import products from "../../MockData/products";
import ItemList from "../ItemList/ItemList";
import ItemCount from '../ItemCount'

const ItemListContainer = ({ greeting }) => {
    const [productos, setproductos] = useState([]);
    const [cargando, setCargando] = useState(true);


    const Datos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
            // console.log(products)
        }, 2000);
    });


    useEffect(() => {
        Datos.then((data) => {
            setproductos(data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    useEffect(() => {
        const getproductos = async () => {
            try {
                const response = await Datos;
                setproductos(response);
                setCargando(false);
            } catch (error) {
                console.log(error);
            }
        };
        getproductos();
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            {cargando ? <span>cargando...</span> : <ItemList productos={productos} />}

            <ItemCount
                stock={5}
                initial={1}
                onAdd={(n) => alert(`agregados ${n} productos`)}
            />
        </div>
    );
};

export default ItemListContainer;
