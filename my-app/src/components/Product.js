// Product Component with a bootstrap table to display the product data
// Use api end point https://dummyjson.com/products to get the product data
// Use useEffect hook to fetch the data from the api end point
// Use useState hook to store the product data
// Use bootstrap table to display the product data
// Fields to display in table are title, description, price, rating
// The response from the api end point is an object containing an array of Products

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setProducts(res.data.products);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Product;