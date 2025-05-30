import React from 'react';
import './Button.css';

function Button({ label, onClick }) {
    return (
        <button className='button-div-addtocart ' onClick={onClick}>{label}</button>
    );
}

export default Button;
