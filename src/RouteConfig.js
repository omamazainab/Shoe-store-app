import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Home from './components/Home'
import Product from './components/Products'
import Product from './components/Product'
  

const RouteConfig = () => {
    return (
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/product" element={<Products/>} >
                        <Route path=":slug" element={<Product></Product>} />
                    </Route>
                </Routes>
            </Router>
    )
}

export default RouteConfig
