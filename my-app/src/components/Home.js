// Create a Home component that will be used to display the home page content.
// Use Bootstrap to create a nav bar with links to Home Component and Product Component
// Create a bootstrap grid with two columns and one row.
// Left column should have a description of application along with a button to the Product Component
// Right column should have a rand image from https://source.unsplash.com/random/800x600

import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container">

        <div className="row">
            <div className="col">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit am consectetur adipisicing elit. Quisquam, voluptatum.</p>
        {/* Buuton with react router link to Product Component */}
        <Link to="/products" className="btn btn-primary">Product</Link>

        
            </div>
            <div className="col">
            <img src="https://source.unsplash.com/random/800x600" alt="random" />
            </div>
        </div>
        </div>
    );
}

export default Home;