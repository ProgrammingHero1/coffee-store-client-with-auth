import React from 'react';

const Coffee = ({ coffee }) => {

    const { name, chef, taste, photo } = coffee

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item">View</button>
                    <button className="btn join-item">Edit</button>
                    <button className="btn join-item">X</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;