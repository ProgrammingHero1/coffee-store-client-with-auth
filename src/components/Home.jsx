import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {

    const coffees = useLoaderData();

    // better use tanstack query or similar packages
    const [loadedCoffees, setLoadedCoffees] = useState(coffees);

    return (
        <div>
            <h2>Welcome Coffee home: {loadedCoffees.length}</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    loadedCoffees.map(coffee => <Coffee
                        coffee={coffee}
                        loadedCoffees={loadedCoffees}
                        setLoadedCoffees={setLoadedCoffees}
                        key={coffee._id}
                    ></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;