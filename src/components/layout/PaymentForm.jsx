import React, { useState } from 'react';

const PaymentForm = ({ setIsFormValid }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        const formatted = input.replace(/(\d{4})(?=\d)/g, '$1 ');
        setCardNumber(formatted);
    };

    const handleCvvNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        setCvv(input);
    }

    if (!cardNumber || !cardName || !expiryMonth || !expiryYear || !cvv) {
        setIsFormValid(false);
    }
    else {
        setIsFormValid(true);
    }


    return (
        <div className="payment-form">
            <div className="form-group">
                <label className="form-label">Kart Sahibi</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Kart üzerindeki isim"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Kart Numarası</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength="19"
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group flex-1">
                    <label className="form-label">Son Kullanma Tarihi</label>
                    <div className="date-selects">
                        <select
                            className="form-select"
                            value={expiryMonth}
                            onChange={(e) => setExpiryMonth(e.target.value)}
                            required
                        >
                            <option value="">Ay</option>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                <option key={month} value={month.toString().padStart(2, '0')}>
                                    {month.toString().padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                        <select
                            className="form-select"
                            value={expiryYear}
                            onChange={(e) => setExpiryYear(e.target.value)}
                            required
                        >
                            <option value="">Yıl</option>
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group cvv-group">
                    <label className="form-label">CVV</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="123"
                        value={cvv}
                        onChange={handleCvvNumberChange}

                        maxLength={3}
                        required
                    />
                </div>
            </div>

            <div className="save-card">
                <input type="checkbox" id="saveCard" />
                <label htmlFor="saveCard">Kartımı güvenli bir şekilde kaydet</label>
            </div>
        </div>
    );
};

export default PaymentForm;
