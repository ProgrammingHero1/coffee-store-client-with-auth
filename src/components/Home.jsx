import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const coffees = useLoaderData();
    console.log(coffees);
    return (
        <div>
            <h2>Welcome home</h2>
        </div>
    );
};

export default Home;