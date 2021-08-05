import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }
    return (
        <header className="container-fluid d-flex bg-secondary mb-4 py-2 flex-row border-bottom border-info">
            <div className="container-fluid d-flex justify-content-center">
                <Link className="h1 text-info" to="/">
                    Busted Brackets
                </Link>
                <nav className="navbar navbar-expand-lg navbar-light d-flex">
                    <div className="container">
                    <ul className="navbar-nav ml-auto">
                    {Auth.loggedIn() ? (
                        <>  
                            <li className="nav-item">
                            <Link  className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                    <Link className="nav-link" to="/bracket">Create a Bracket</Link>
                                </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/" onClick={logout}>

                                Logout
                            </a>
                            </li>
                        </>
                                 ) : (
                         <>     
                                <li className="nav-item font-weight-bold h4">
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item font-weight-bold h4">
                                <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                                <li className="nav-item font-weight-bold h4">
                                    <Link className="nav-link" to="/about">About Us</Link>
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