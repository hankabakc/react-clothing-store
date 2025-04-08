import React, { useState } from 'react';
import './AddressSummary.css';

const AddressSummary = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState({
        address: 'Ev Adres, Mahalle, Sokak No:1, İlçe/İl',
        city: '',
        district: '',
    });

    const [formData, setFormData] = useState({
        address: '',
        city: '',
        district: '',
    });

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setAddress(formData);
        setIsEditing(false);
    };

    return (
        <div className="address-summary">
            <div className="address-content">
                <div>
                    <h4 className="address-title">Teslimat Adresi</h4>
                    <p className="address-text">
                        {address.address}, {address.district}, {address.city}
                    </p>
                </div>
                <button className="change-button" onClick={handleToggleEdit}>
                    {isEditing ? 'İptal' : 'Değiştir'}
                </button>
            </div>

            {isEditing && (
                <form className="address-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="address">Adres:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Yeni adresinizi girin"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Şehir:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Şehir"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="district">İlçe:</label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            placeholder="İlçe"
                            value={formData.district}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="save-button">
                        Kaydet
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddressSummary;