import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faEbay, faGoogleWallet, faHackerNews, faOpencart, faShirtsinbulk, faShopware, faWeebly } from '@fortawesome/free-brands-svg-icons';

function Service() {
    return (
        <section class="store py-5 bg-light text-center">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-6 m-auto">
                        <p class="m-0">Green Technology</p>
                        <h1>Our Work</h1>
                        <div class="line my-4"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam ipsa beatae nemo suscipit temporibus non recusandae molestias debitis blanditiis voluptatibus eos, sequi facilis est eligendi sit porro ex quaerat!
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 mt-2">
                        <div class="card py-3">
                            <div class="card-body">
                                <span><FontAwesomeIcon icon={faShirtsinbulk} /></span>
                                <h5 class="head1 py-3">Free Shipping</h5>
                                <p class="per1">With $100 or more orders. Go to Oars Store,</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-2">
                        <div class="card py-3">
                            <div class="card-body">
                                <span><FontAwesomeIcon icon={faShopware} /></span>
                                <h5 class="head1 py-3">Organic Certified</h5>
                                <p class="per1">With $100 or more orders. Go to Oars Store,</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-2">
                        <div class="card py-3">
                            <div class="card-body">
                                <span><FontAwesomeIcon icon={faEbay} /></span>
                                <h5 class="head1 py-3">Secure Payment</h5>
                                <p class="per1">With $100 or more orders. Go to Oars Store,</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-2">
                        <div class="card py-3">
                            <div class="card-body">
                                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                                <h5 class="head1 py-3">Friendly Support</h5>
                                <p class="per1">With $100 or more orders. Go to Oars Store,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service