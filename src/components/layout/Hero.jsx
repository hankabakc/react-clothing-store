import React from 'react';
import './Hero.css';

function Hero({ scrollToProductList }) {
    return (
        <div>
            <div className='hero'>
                <div className='insideBox'>
                    <p>Tarzını konuştur. En trend parçalar burada</p>
                    <button onClick={scrollToProductList}>Alisverise Basla</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
