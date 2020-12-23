import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../App';
import Sidebar from './Sidebar';

const YourReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Congrats! New review Addded')
                }
            })
    };
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div className="col-md-6">
            <div className="d-flex justify-content-between">
                    <h3> Dashboard:Give YOur Feedback!</h3> 
                    <div>
                        <img style={{width:"50px",height:"50px", borderRadius:"50%"}} src={loggedInUser.photoURL} alt="" /> <span>{loggedInUser.user}</span>
                    </div>
                </div>
                <form className="pt-5 pr-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="designition" placeholder="designition" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="description" placeholder="description" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <input type="submit" value="Send" className="btn btn-dark" />
                </form>
            </div>
        </div>
    );
};

export default YourReview;