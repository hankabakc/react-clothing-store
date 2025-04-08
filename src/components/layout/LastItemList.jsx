import React from 'react';
import '../../Pages/PaymentPage.css';
import TotalPrice from './TotalPrice';

function LastItemList({ product }) {
    const productTotalPrice = product.price * (product.quantity || 1);

    return (
        <div className="last-item-container">
            <div className="last-item-content">
                {product.image && (
                    <div className="last-item-image-container">
                        <img src={product.image} alt={product.name} />
                    </div>
                )}

                <div className="last-item-details">
                    <h3 className="last-item-name">{product.name}</h3>

                    <div className="last-item-meta">
                        {product.size && <span className="last-item-size">Beden: {product.size}</span>}
                        <span className="last-item-quantity">Adet: {product.quantity || 1}</span>
                    </div>
                    <div className="last-item-pricing">
                        <span className="last-item-unit-price">{product.price} TL </span>
                        <span className="last-item-total">Toplam: {productTotalPrice.toFixed(2)} TL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastItemList;