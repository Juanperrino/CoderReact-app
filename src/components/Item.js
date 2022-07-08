import React from 'react'

const Item = ({ titulo, precio, descripcion, image }) => {
    return (
        <div className='cardItem'>
            <img src={image} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{precio}</p>
            <p>{descripcion}</p>
        </div>
    );
}

export default Item