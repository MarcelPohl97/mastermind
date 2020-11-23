import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Landing = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <div className="relative bg-green-400 h-screen w-100">
            <header className="container mx-auto p-5">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-12 h-12 mr-2" alt="Mastermind Icon"/>
                        <h2 className="text-2xl text-red-500"><span className="text-black">Master</span>mind</h2>
                    </div>
                    <button aria-controls="simple-menu" aria-haspopup="true" className="bg-white py-2 px-9 shadow-lg rounded-md text-green-400 text-base uppercase" onClick={handleClick}>⛏Menu</button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </nav>
                <div className="flex flex-col items-center mt-24">
                    <div className="flex items-center">
                        <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-16 h-16 mr-2" alt="Mastermind Icon"/>
                        <h2 className="text-4xl text-red-500"><span className="text-black">Master</span>mind</h2>
                    </div>
                    <p className="text-white text-2xl text-center mt-6">A simple, customizable Collaboration tool for teams 🤼 and individuals ⛹. <br></br> It's Free ✌.</p>
                    <div className="flex items-center mt-14">
                        <button aria-controls="simple-menu" aria-haspopup="true" className="bg-white py-3 px-10 shadow-lg rounded-md text-black text-base uppercase mr-4">⚡ Try it out</button>
                        <button aria-controls="simple-menu" aria-haspopup="true" className="bg-black py-3 px-10 shadow-lg rounded-md text-white text-base uppercase">☕ <span className="text-red-500">Buy me</span> a coffee</button>
                    </div>
                </div>
            </header>
            <div class="custom-shape-divider-bottom-1606123735">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        </>
    );
}

export default Landing;