import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const Home = () => {

  if(Auth.loggedIn()){
    return (
        <h4>
            Welcome  to the Busted Brackets!
            <form  className="form-group w-100" >
                        <input
                        className="form-control mb-2"
                        placeholder="Your Bracket title"
                        name="bracketTitle"
                        type="bracketTitle"
                        id="bracketTitle"
                       
                        />
                        <input
                          className="form-control mb-2"
                          placeholder="Rounds"
                          name="rounds"
                          type="rounds"
                          id="rounds"
                        
                          />  
                        <textarea
                        className="form-control mb-2"
                        placeholder="Description"
                        name="text"
                        type="text"
                        id="text"
                        rows="5"
                        
                        />
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Create Your Bracket !
                            </button> 

                    </form>
        </h4>
        
    )
}
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
