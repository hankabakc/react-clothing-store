import React from 'react';

const PaymentForm = () => {
    return (
        <div className="payment-form">
            <div className="form-group">
                <label className="form-label">Kart Sahibi</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Kart üzerindeki isim"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Kart Numarası</label>
                <input
                    type="text"
                    className="form-input"
                    placeholder="1234 5678 9012 3456"
                />
            </div>

            <div className="form-row">
                <div className="form-group flex-1">
                    <label className="form-label">Son Kullanma Tarihi</label>
                    <div className="date-selects">
                        <select className="form-select">
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                <option key={month} value={month.toString().padStart(2, '0')}>
                                    {month.toString().padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                        <select className="form-select">
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                                <option key={year} value={year}>{year}</option>
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
