import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPlus, faShoppingBasket, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div style={{ overflowX: "hidden" }} className="d-flex flex-column float-left col-md-2 ">
            <Link to="/home"><img className="w-75" src={logo} alt="" /></Link>
            <br />
            <Link className="text-dark text-decoration-none" to="/order"><FontAwesomeIcon icon={faShoppingCart} /> Order</Link><br />
            <Link className="text-dark text-decoration-none" to="/yourcourse"><FontAwesomeIcon icon={faShoppingBasket} /> Services</Link><br />
            <Link className="text-dark text-decoration-none" to="/yourreview"><FontAwesomeIcon icon={faCommentDots} /> Review</Link><br />
            { isAdmin && <Link className="text-dark text-decoration-none" to="/serviceslist"><FontAwesomeIcon icon={faShoppingBasket} /> Services list</Link>}<br />
            {isAdmin && <Link className="text-dark text-decoration-none" to="/addservices"><FontAwesomeIcon icon={faPlus} /> Add service</Link>}<br />
            { isAdmin && <Link className="text-dark text-decoration-none" to="/makeadmin"><FontAwesomeIcon icon={faUser} /> Make Admin</Link>}

        </div>
    );
};

export default Sidebar;