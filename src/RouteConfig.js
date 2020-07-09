import React from 'react'
import {
    BrowserRouter  as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'
  

const RouteConfig = () => {
    return (
            <Router>
                <NavBar></NavBar>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route exact path="/products" element={<Products/>} />
                    <Route path="/products/:slug" element={<Product/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
    )
}

export default RouteConfig
