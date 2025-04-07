import React from 'react';
import './SideBarCartMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/CartSlice';
import { useNavigate } from 'react-router-dom';

function SidebarCartMenu({ isToggled, toggleSidebar }) {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) =>
        total + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        navigate('/payment');
    };

    return (
        <div className={`sidebar-cart-container ${isToggled ? 'open' : ''}`}>
            <div className="sidebar-cart-header">
                <p className="cart-title">SEPETİM</p>
                <button className="close-button" onClick={toggleSidebar}>X</button>
            </div>
            <hr className="cart-divider" />

            <div className="cart-items-container">
                {!cartItems.length ? (
                    <div className="empty-cart">
                        <p style={{ marginBottom: '10px' }}>Sepetiniz boş.</p>
                        <button className="continue-shopping" onClick={toggleSidebar}>
                            ALIŞVERİŞE DEVAM ET
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="cart-item-details">
                                        <p className="item-title">{item.title}</p>
                                        <p className="item-price">{item.price.toLocaleString('tr-TR')} TL</p>
                                        <div className="quantity-controls">
                                            <button
                                                className="quantity-button"
                                                onClick={() => dispatch(decreaseQuantity({ id: item.id, size: item.size }))}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button
                                                className="quantity-button"
                                                onClick={() => dispatch(increaseQuantity({ id: item.id, size: item.size }))}
                                            >
                                                +
                                            </button>
                                            <div className='size-container'>{item.size && <p>{item.size}</p>}</div>
                                        </div>
                                    </div>
                                    <button
                                        className="remove-button"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        <span>×</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Toplam:</span>
                                <span className="total-price">{totalPrice.toLocaleString('tr-TR')} TL</span>
                            </div>
                            <button className="checkout-button" onClick={handleCheckout}>ÖDEMEYE GEÇ</button>
                            <button className="continue-shopping" onClick={toggleSidebar}>
                                ALIŞVERİŞE DEVAM ET
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SidebarCartMenu;
