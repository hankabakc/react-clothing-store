import React, { useState } from 'react';
import { useSelector } from 'react-redux';  // Redux'tan veri almak için import ediyoruz
import OrderSummary from '../components/layout/OrderSumary';
import PaymentMethods from '../components/layout/PaymentMethods';
import PaymentForm from '../components/layout/PaymentForm';
import TransferInfo from '../components/layout/TransferInfo';
import AddressSummary from '../components/layout/AddressSummary';
import Steps from '../components/layout/Steps';
import { ChevronRight } from 'lucide-react';
import './PaymentPage.css';
import Navbar from '../components/layout/Navbar';
import AddToCardLayout from '../components/layout/AddToCardLayout';
import { FaShoppingBag } from 'react-icons/fa';

const PaymentPage = () => {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <Navbar></Navbar>
            <div className="payment-container">
                <div className="payment-column">
                    {cartItems.length === 0 ? (
                        <div className='empty-cart-message'>
                            <FaShoppingBag fontSize={30} />
                            <p style={{ marginTop: '20px' }}>Sepetiniz Bostur</p>
                        </div>

                    ) : (
                        cartItems.map((item) => (
                            <OrderSummary key={item.id} product={item} />
                        ))
                    )}
                </div>
                <div className="payment-column">
                    <Steps step={step} />
                    <PaymentMethods paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                    {paymentMethod === 'creditCard' ? <PaymentForm /> : <TransferInfo />}
                    <AddressSummary />
                    <div className="secure-payment">
                        <span>Güvenli Ödeme</span>
                    </div>
                    <button className="checkout-button">
                        <span>Siparişi Tamamla</span>
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
            <AddToCardLayout />
        </div>
    );
};

export default PaymentPage;
