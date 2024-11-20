import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;