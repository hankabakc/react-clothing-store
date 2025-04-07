import React from 'react';
import './AddToCardButton.css';
import { FaShoppingBag } from 'react-icons/fa';

const AddToCardButton = ({ toggleSidebar }) => {
    return (
        <button className="add-to-cart-btn" onClick={toggleSidebar}>
            <FaShoppingBag />
        </button>
    );
};

export default AddToCardButton;
