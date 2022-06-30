import React from 'react';
// import '/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (
        <button className='butonLindo'><FontAwesomeIcon icon={faCartShopping} /></button>
    )
}

export default CartWidget