import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice';

function ProductDetail() {

    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();
    const [size, setSize] = useState(null);

    const handleAddToCart = () => {
        if (size) {
            dispatch(addToCart({
                ...product,
                quantity: counter,
                size: size
            }));
        }
        else {
            alert('Lutfen bir boyut seciniz');
        }
    };

    const handleClick = (size) => {
        setSize(size);
    }

    const handleIncreaseCounter = () => {
        setCounter(counter + 1);
    }

    const handleDecreaseCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(
            (response => { setProduct(response.data) })
        ).catch(
            (error) => { console.log(error) }
        )
    }, [id]);

    if (!product) {
        return <div className='loading'>Yukleniyor...</div>
    }

    return (
        <>
            {product &&
                <div className='productDetail-all-cointainer'>
                    <div className='productDetail-image-container'>
                        <div className='product-main-image'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className='product-thumbnail-image'>
                            <img src={product.image} alt={product.title} />
                            <img src={product.image} alt={product.title} />
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className='product-details-container'>
                        <h3>{product.title}</h3>
                        <p className='product-price'>{product.price}TL</p>
                        <p className='product-description'>{product.description}</p>
                        <h4>BEDEN</h4>
                        <div className='product-size-container'>
                            <button onClick={() => handleClick('S')} className={size === 'S' ? 'active' : ''}>S</button>
                            <button onClick={() => handleClick('M')} className={size === 'M' ? 'active' : ''}>M</button>
                            <button onClick={() => handleClick('L')} className={size === 'L' ? 'active' : ''}>L</button>
                            <button onClick={() => handleClick('XL')} className={size === 'XL' ? 'active' : ''}>XL</button>
                        </div>
                        <h4>ADET</h4>
                        <div className='product-count'>
                            <button onClick={handleDecreaseCounter}>-</button>
                            <div className='product-counter-container'>{counter}</div>
                            <button onClick={handleIncreaseCounter}>+</button>
                            <div className='product-lastprice'>{parseFloat(product.price * counter, 2).toFixed(2)}TL</div>
                        </div>
                        <div className='product-addbuttons'>
                            <button onClick={handleAddToCart}>SEPETE EKLE</button>
                            <button>SIMDI SATIN AL</button>
                        </div>
                        <hr style={{ border: '1px solid #ccc', opacity: 0.5 }} />
                        <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Urun Kodu :</span> {product.id}</p>
                        <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Urun Kategorisi :</span> {product.category}</p>
                    </div>
                </div >
            }
        </>
    )
}

export default ProductDetail