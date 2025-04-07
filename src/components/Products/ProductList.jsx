import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {
    const [product, setProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [selectedId, setSelectedId] = useState(-1);



    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                setProduct(response.data);
                const clothingProduct = response.data.filter(
                    (product) => product.category === "men's clothing" || product.category === "women's clothing"
                );
                setFilteredProduct(clothingProduct);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }, []);

    return (
        <div>
            <div className='productList'>
                <ul>
                    {filteredProduct.map((product) => (
                        <ProductItem key={product.id} {...{ product, setSelectedId, selectedId }} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductList;
