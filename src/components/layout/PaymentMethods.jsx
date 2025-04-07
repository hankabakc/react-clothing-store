import React from 'react';
import { CreditCard, Lock } from 'lucide-react';

const PaymentMethods = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <div className="payment-methods">
            <h3 className="subsection-title">Ödeme Yöntemi</h3>
            <div className="payment-options">
                <div
                    className={`payment-option ${paymentMethod === 'creditCard' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('creditCard')}
                >
                    <CreditCard className="payment-icon" />
                    <span>Kredi Kartı</span>
                </div>
                <div
                    className={`payment-option ${paymentMethod === 'transfer' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('transfer')}
                >
                    <Lock className="payment-icon" />
                    <span>Havale / EFT</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;
