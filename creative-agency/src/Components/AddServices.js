import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import Sidebar from './Sidebar';

const AddServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [card, setCard] = useState({});
    const [file, setFile] = useState(null);
    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleBlur = e => {
        const newCard = { ...card };
        newCard[e.target.name] = e.target.value;
        setCard(newCard)
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('description', card.description);
        formData.append('service', card.service);

        fetch('http://localhost:5000/createService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div className="col-md-6">
            <div className="d-flex justify-content-between">
                    <h3> Dashboard:Add new service</h3> 
                    <div>
                        <img style={{width:"50px",height:"50px", borderRadius:"50%"}} src={loggedInUser.photoURL} alt="" /> <span>{loggedInUser.user}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name="service" className="form-control" placeholder="Service Name" /> <br />
                    <textarea onBlur={handleBlur} type="text" name="description" placeholder="description" className="form-control" /> <br />
                    <input onChange={handleFile} type="file" name="file" id="" className="form-control" />
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;