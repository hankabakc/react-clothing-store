import React from 'react';

const AddressSummary = () => {
    return (
        <div className="address-summary">
            <div className="address-content">
                <div>
                    <h4 className="address-title">Teslimat Adresi</h4>
                    <p className="address-text">Ev Adres, Mahalle, Sokak No:1, İlçe/İl</p>
                </div>
                <button className="change-button">Değiştir</button>
            </div>
        </div>
    );
};

export default AddressSummary;
