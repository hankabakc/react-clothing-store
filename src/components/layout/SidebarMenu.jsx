import React from 'react';
import './Navbar.css';
import './SidebarMenu.css';
import { useNavigate } from 'react-router-dom';

function SidebarMenu({ isOpen, scrollToProductList }) {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/payment')
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div style={{ padding: '15px 20px', fontSize: '30px' }}>TrendWear</div>
            <hr />
            <ul className="sidebar-ul">
                <li>Urunler</li>
                <li onClick={handleNavigate}>Odeme sayfasi</li>
            </ul>
        </div>
    );
}

export default SidebarMenu;
