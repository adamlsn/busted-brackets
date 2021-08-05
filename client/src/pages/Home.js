import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const myStyles = {
        display: "inline-block",
        martinTop:"%18",
    }
    return (
        <main>
            <div className="hero"
            style={{
                textAlign:"center",
            }}>
                <h1 style={myStyles.title} className="heroTitle">
          <Link to="/about">BUSTED BRACKETS</Link>
        </h1>
        <div className="button-hero">
          <Link to="/signup">Join us and start creating your bracket</Link>
        </div>
        <div className="button-hero">
          <Link to="/login">Login and see your brackets!</Link>
        </div>
        <div className="button-hero">
          <Link to="/about">About Us</Link>
        </div>
            </div>
        </main>
    )
}

export default Home;
