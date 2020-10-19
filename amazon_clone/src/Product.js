import React from 'react'
import "./Product.css"
import img1 from './images/headphone.jpg'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>
                    product Description goes here
                </p>
<p className="product_price">
    <small>$</small>
    <strong>19.99</strong>
</p>
<div className="product_rating">
    <p>
        *
    </p>
</div>
            </div>
            <img src={img1}/>
            <button>Add to Basket </button>
        </div>
    )
}

export default Product
