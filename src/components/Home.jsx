import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {

    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <h2>Welcome Coffee home: {coffees.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    coffees.map(coffee => <Coffee coffee ={coffee} key={coffee._id}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;