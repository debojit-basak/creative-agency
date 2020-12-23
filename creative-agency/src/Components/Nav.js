import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../images/logos/logo.png';

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
            <a className="navbar-brand" href="/"><img className="w-25" src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Our&nbsp;Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Our&nbsp;Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact&nbsp;us</a>
                    </li>
                    { loggedInUser.user &&
                        <li className="nav-item">
                            <a className="nav-link" href="/">{loggedInUser.user}</a>
                        </li>
                    }
                    <li className="nav-item">
                        {loggedInUser.user ? <Link to="/" className="btn btn-dark">Log&nbsp;Out</Link> : <Link to="/login" className="btn btn-dark">Log&nbsp;In</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;