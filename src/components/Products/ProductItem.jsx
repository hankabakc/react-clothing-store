import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductItem({ product }) {
    const dispatch = useDispatch();
    const [popupVisible, setPopupVisible] = useState(false);



    const handleAddToCart = (size) => {
        dispatch(addToCart({
            ...product,
            quantity: 1,
            size: size
        }));

        setPopupVisible(prev => !prev);
    };

    const handleSizeSelect = (size) => {
        handleAddToCart(size);
        setPopupVisible(false);
    };

    return (
        <li>
            <Link style={{ color: 'black', textDecoration: 'none' }} to={`/detail/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <hr style={{ border: '1px solid #ccc', opacity: 0.9 }} />
                <p>Fiyat: {product.price}</p>
            </Link>

            <div className='button-div'>
                <div className='add-to-cart-container'>
                    <div className={`popup-size-options ${popupVisible ? 'show' : 'hide'}`}>
                        {['S', 'M', 'X', 'XL'].map(size => (
                            <div key={size} className="popup-text" onClick={() => handleSizeSelect(size)}>
                                {size}
                            </div>
                        ))}
                    </div>
                    <Button label="Sepete Ekle" onClick={() => setPopupVisible(!popupVisible)} />
                </div>
            </div>
        </li>
    );
}

export default ProductItem;
