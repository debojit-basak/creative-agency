import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import Sidebar from './Sidebar';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceDataa, setServiceDataa] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/AllCardItem')
            .then(res => res.json())
            .then(data => {
                setServiceDataa(data);
                //  console.log(data);
            })
    }, [])

    const { id } = useParams();

    const TheItem = serviceDataa.find(p => p.service === id) || {};
    console.log(TheItem.service);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Congrats! New Service Addded')
                }
            })
    };
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div className="col-md-6">
                <div className="d-flex justify-content-between">
                    <h3> Dashboard:Order</h3> 
                    <div>
                        <img style={{width:"50px",height:"50px", borderRadius:"50%"}} src={loggedInUser.photoURL} alt="" /> <span>{loggedInUser.user}</span>
                    </div>
                </div>
                <form className="pt-5 pr-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input value={loggedInUser.user} type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input value={loggedInUser.email} type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input value={TheItem.service} type="text" ref={register({ required: true })} name="service" placeholder="course name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea value={TheItem.description} type="text" ref={register({ required: true })} name="description" placeholder="description" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input value="Pending" type="text" ref={register({ required: true })} name="status" placeholder="status" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn btn-dark">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;