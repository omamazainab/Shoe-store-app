import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from './../shoes.json';
import './../styles/Product.css'

const Product = () => {

    const { slug } = useParams();
    const shoe = shoes[slug];

    if (!shoe) {
        return <h2>Page not found</h2>
    }

    return (
        <div className="product">
            <img src={shoe.img} alt={shoe.name} height="500px" width="500px" />
            <h5 className=" product-name">{shoe.name} </h5>
        </div>
    )
}

export default Product
