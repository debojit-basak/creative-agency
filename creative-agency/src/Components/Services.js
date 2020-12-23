import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ img, name, des, id,handleCard }) => {

    return (

        <div style={{ width: "300px" }} id="card" className="p-1" >
            <Link onClick={() => handleCard(id)} className="text-decoration-none text-dark" to={"/order/" + id}>
                <img style={{ width: "150px" }} src={`http://localhost:5000/${img}`} alt="" />
                <h3>{name}</h3>
                <p>{des}</p>
                <button className=" btn btn-dark">Order Now</button>
            </Link>
        </div>

    );
};

export default Services;