import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { UserContext } from '../App';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [AllEvent, setAllEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getEventss', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                                setAllEvent(data)
            })
    }, []);
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-2">
            <div className="d-flex justify-content-between">
                    <h3> Dashboard:All Enrolled Services</h3> 
                    <div>
                        <img style={{width:"50px",height:"50px", borderRadius:"50%"}} src={loggedInUser.photoURL} alt="" /> <span>{loggedInUser.user}</span>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllEvent.map(x =>
                                <tr>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.service}</td>
                                    <td>{x.description}</td>
                                    <td classname="btn btn-warning">{x.status}</td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ServiceList;