import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { UserContext } from '../App';
import Enrolled from './Enrolled';


const Yourcourse = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userEvent, setuserEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getEvents?email=' + loggedInUser.email, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setuserEvent(data)
            })
    }, []);
    return (
        <div style={{ overflowX: "hidden" }} className="row pl-4 mt-2" >
            <Sidebar></Sidebar>
            <div style={{ overflowX: "hidden" }} className="col-md-10">
            <div className="d-flex justify-content-between">
                    <h3> Dashboard:Your Courses</h3> 
                    <div>
                        <img style={{width:"50px",height:"50px", borderRadius:"50%"}} src={loggedInUser.photoURL} alt="" /> <span>{loggedInUser.user}</span>
                    </div>
                </div>
                <div className="row">
                    {
                        userEvent.map(x => <Enrolled name={x.service} des={x.description} ></Enrolled>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Yourcourse;