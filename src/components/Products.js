import React from 'react'
import shoes from '../shoes.json'
import { Link } from 'react-router-dom'
import './../styles/Products.css'

const Products = () => {

    return (
        <div className="product-container">

            {Object.keys(shoes).map(keyName => {
                const shoe = shoes[keyName]
                return (
                    // <div className="product-container">
                        <Link
                            className="Link"
                            to={`/products/${keyName}`}
                            key={keyName}
                        >
                            <div >
                                <img src={shoe.img} alt="shoe" width='100%' />
                                <h6 className='black-text'>{shoe.name}</h6>

                            </div>

                        </Link>
                    // </div>


                )
            }
            )}
        </div>
    )
}

export default Products
