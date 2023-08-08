import React from 'react';
// import Brand from './Header/Brand';
// import Search from './Header/Search';
// import Navbar from './Header/Navbar';
import CompleteNav from './Header/CompleteNav';

const Header = () => {
    return (
        <header>
            {/* <div className='container-fluid bg-light d-flex justify-content-between align-items-center border-bottom py-2'>
                <div className="brand">
                    <Brand/>
                </div>
                <div className="search">
                    <Search/>
                </div>
                <div className="navbar">
                    <Navbar/>
                </div>
            </div> */}
                <CompleteNav/>
        </header>
    );
}

export default Header
