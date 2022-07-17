import React from 'react';
// import '../Item/Item.css';

import { Link } from 'react-router-dom';


const Item = ({ product }) => {
    // console.log(product)
    return (
        <div className="containerGralMp">
            <div className="containerMp">
                <div className="ContainFlex">
                    {/* <div className="column6">
                        <p className="m-0">Green Technology</p>
                        <h1>Our Best Motherboards</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo quasi reiciendis tempora eos inventore quaerat ex illo architecto dolor, sint provident expedita commodi magni porro impedit dignissimos quis quam?</p>
                    </div> */}
                    <div className="contain-cards">
                        <div className="column-cards">
                            <div className="cards">
                                <div className="cards-body">
                                    <div className="star">
                                        <span><i className="bi bi-star-fill"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                    </div>
                                    <img src={product.image} className="img-fluid pb-3" alt="" />
                                    <h4 className="head1">{product.title}</h4>
                                    <p className="per1">{product.category}</p>
                                    <h4 className="head2">${product.price}</h4>
                                    <div className="buttonn"><Link to={`/detail/${product.id}`}>
                                        <button className="btnc my-4">SHOP NOW</button>
                                    </Link></div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item