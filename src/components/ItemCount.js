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

                <button className='cbtn' onClick={decremento}>-</button>
                <h3>{count}</h3>

                <button className='cbtn' onClick={incrementar}>+</button>
            </div>
            <div className='buttonnCount'>
                <button className="btnc count" onClick={() => {
                    if (count <= stock) {
                        onAdd(count);
                    } else {
                        alert("No hay esa cantidad de productos")
                    }
                    // count <= stock && onAdd(count);
                }}>Add to Cart</button>

            </div>
        </div>
    );
};

export default ItemCount;