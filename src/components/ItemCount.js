import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    const incrementar = () => {
        setCount(count + 1)
    };
    const decremento = () => {
        setCount(valAnt => valAnt > 0 ? count - 1 : count)
    };
    return (
        <div className='contador'>
            <div className='masMenos'>

                <button onClick={decremento}>-</button>
                <h3>{count}</h3>

                <button onClick={incrementar}>+</button>
            </div>
            <button onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                } else {
                    alert("No hay esa cantidad de productos")
                }
                // count <= stock && onAdd(count);
            }}>Add to Cart</button>
        </div>
    );
};

export default ItemCount;