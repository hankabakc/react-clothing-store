import React, { useState } from 'react';
import './Navbar.css';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import SidebarMenu from './SidebarMenu.jsx';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" style={{ fontSize: '25px', textDecoration: 'none', color: 'white' }}>TrendWear</Link>
            <ul className="navbar-links">
                <li>KADIN GIYIM</li>
                <li>ERKEK GIYIM</li>

            </ul>
            <TiThMenu style={{ fontSize: '20px' }} onClick={toggleMenu} />

            <SidebarMenu isOpen={isOpen} />
        </nav>
    );
}

export default Navbar;
