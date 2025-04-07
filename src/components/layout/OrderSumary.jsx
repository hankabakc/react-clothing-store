import React from 'react';

const OrderSummary = ({ product }) => {
    const subtotal = (product.price * product.quantity).toFixed(2);
    const total = (product.price * product.quantity + (product.shipping || 0) - (product.discount || 0)).toFixed(2);
    const shipping = (product.shipping || 0).toFixed(2);
    const discount = (product.discount || 0).toFixed(2);

    return (
        <div className="summary-box">
            <h3 className="subsection-title">Sipariş Özeti</h3>
            <div className="product-item">
                <div className="product-image">
                    {product.image && <img src={product.image} alt={product.name} />}
                </div>
                <div className="product-details">
                    <h4 className="product-title">{product.name}</h4>
                    <div className="product-meta">Beden: {product.size}</div>
                    <div className="product-meta">Adet: {product.quantity}</div>
                </div>
                <div className="product-price">{product.price} TL</div>
            </div>

            <div className="summary-totals">
                <div className="summary-row">
                    <span>Ara Toplam</span>
                    <span>{subtotal} TL</span>
                </div>
                <div className="summary-row">
                    <span>Kargo</span>
                    <span>{shipping} TL</span>
                </div>
                {product.discount > 0 && (
                    <div className="summary-row">
                        <span>İndirim</span>
                        <span>-{discount} TL</span>
                    </div>
                )}
                <div className="summary-row total">
                    <span>Toplam</span>
                    <span>{total} TL</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
