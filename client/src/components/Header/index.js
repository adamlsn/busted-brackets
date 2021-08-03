import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="">
                <Link className="navbar-brand" to="/">
                    Busted Brackets
                </Link>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                    <ul className="navbar-nav ml-auto">
                    {Auth.loggedIn() ? (
                        <>  
                            <li className="nav-item">
                            <Link  className="nav-link" to="/profile">Me</Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/" onClick={logout}>

                                Logout
                            </a>
                            </li>
                        </>
                                 ) : (
                         <>     
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bracket">Create a Bracket</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                                </li>

                         </>
                        )}
                        </ul>
                        </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;