import React from 'react';

const Enrolled = ({ name, des }) => {
    return (
        <div className="col-md-6 p-2" >
            <h1>{name}</h1>
            <p>{des}</p>
        </div>
    );
};

export default Enrolled;