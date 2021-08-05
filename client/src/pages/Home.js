import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <main>
            <div className="container hero border border-info"
            style={{
                textAlign:"center",
            }}>
                <h1 className="hero-title">
          <h1>EPIC EXPLOSION</h1>
        </h1>
        <div className="button-hero mb-5">
          <img src="https://img.icons8.com/ios/50/000000/add-user-group-man-man--v1.png"/>
          <Link to="/signup">Join us and start creating your bracket</Link>
        </div>
        <div className="button-hero mb-5">
          <img src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png"/>
          <Link to="/login">Login and see your brackets!</Link>
        </div>
        <div className="button-hero mt-5">
          <img src="https://img.icons8.com/ios/50/000000/about.png"/>
          <Link to="/about">About Us</Link>
        </div>
            </div>
        </main>
    )
}

export default Home;
