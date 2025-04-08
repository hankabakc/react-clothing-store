import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OrderSummary from '../components/layout/OrderSumary';
import PaymentMethods from '../components/layout/PaymentMethods';
import PaymentForm from '../components/layout/PaymentForm';
import TransferInfo from '../components/layout/TransferInfo';
import AddressSummary from '../components/layout/AddressSummary';
import Steps from '../components/layout/Steps';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './PaymentPage.css';
import Navbar from '../components/layout/Navbar';
import AddToCardLayout from '../components/layout/AddToCardLayout';
import { FaShoppingBag } from 'react-icons/fa';
import TotalPrice from '../components/layout/TotalPrice';
import { IoMdCheckmarkCircle } from "react-icons/io";
import LastItemList from '../components/layout/LastItemList';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [isFormValid, setIsFormValid] = useState(true);
    const cartItems = useSelector((state) => state.cart.items);

    const navigate = useNavigate();

    const handleStepIncrease = () => {
        if (paymentMethod === 'creditCard' && !isFormValid) {
            alert('Lütfen tüm ödeme bilgilerini doldurun.');
            return;
        }
        setStep(step + 1);
    };

    const handleStepDecrease = () => {
        setStep(step - 1);
    };

    return (
        <div>
            <Navbar />
            <div className="payment-container">
                {step === 3 ? (
                    <div className="applied-body">
                        <div className='applied-all-container'>
                            <div className='applied-container'>
                                <h2>SİPARİŞİNİZ ONAYLANMIŞTIR</h2>
                                <IoMdCheckmarkCircle fontSize={40} color='green' />
                            </div>
                            <div style={{ width: '100%' }}>
                                {cartItems.map((item) => (
                                    <div key={item.id}>
                                        <LastItemList product={item} />
                                    </div>
                                ))}
                            </div>
                            <TotalPrice></TotalPrice>
                            <div className="checkout-button-container" style={{ width: '100%' }}>
                                <button className="checkout-button" onClick={handleStepDecrease}>
                                    <ChevronLeft size={18} />
                                    <span>Önceki Adım</span>
                                </button>
                                <button className="checkout-button" onClick={() => { navigate('/'); }}>
                                    <span>Alışverişe Devam Et</span>
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="payment-column">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart-message">
                                    <FaShoppingBag fontSize={30} />
                                    <p style={{ marginTop: '20px' }}>Sepetiniz Boş</p>
                                </div>
                            ) : (
                                <div>
                                    <TotalPrice />
                                    {cartItems.map((item, index) => (
                                        <div key={index}>
                                            <OrderSummary product={item} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {step === 1 && (
                            <div className="payment-column">
                                <Steps step={step} />
                                <AddressSummary />
                                <div className="secure-payment">
                                    <span>Güvenli Ödeme</span>
                                </div>
                                <button className="checkout-button" onClick={handleStepIncrease}>
                                    <span>Sonraki Adım</span>
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="payment-column">
                                <Steps step={step} />
                                <PaymentMethods paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                                {paymentMethod === 'creditCard' ? (
                                    <PaymentForm setIsFormValid={setIsFormValid} />
                                ) : (
                                    <TransferInfo />
                                )}
                                <div className="secure-payment">
                                    <span>Güvenli Ödeme</span>
                                </div>
                                <div className="checkout-button-container">
                                    <button className="checkout-button" onClick={handleStepDecrease}>
                                        <ChevronLeft size={18} />
                                        <span>Önceki Adım</span>
                                    </button>
                                    <button className="checkout-button" onClick={handleStepIncrease}>
                                        <span>Sonraki Adım</span>
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div >
            <AddToCardLayout />
        </div >
    );
};

export default PaymentPage;