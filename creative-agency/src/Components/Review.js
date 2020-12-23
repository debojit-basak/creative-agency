import React, { useContext } from 'react';
import { UserContext } from '../App';
import img from "../images/customer-2.png"

const Review = ({  name, designition, description }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div  className="col-md-4">
            <div style={{border:'1px solid lightgray'}}>
            <div className="d-flex">
                <img className="w-25" src={img} alt="" />
                <p className="mt-3">{name} <br /> <small>{designition}</small> </p>
            </div>
            <p className="ml-3" >{description}</p>
            </div> 
        </div>
    );
};

export default Review;