import React from 'react';

const Steps = ({ step }) => {
    return (
        <div className="steps-container">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>Teslimat</div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>Ödeme</div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>Onay</div>
        </div>
    );
};

export default Steps;
