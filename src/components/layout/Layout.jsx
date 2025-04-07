import React, { useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Banner from './Banner';
import ProductList from '../Products/ProductList';
import Footer from './Footer';
import AddToCardLayout from './AddToCardLayout';
import SidebarMenu from './SidebarMenu';

function Layout() {
    const productListRef = useRef(null);
    const scrollToProductList = () => {
        if (productListRef.current) {
            window.scrollTo({
                top: productListRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <Navbar />
            <SidebarMenu />
            <Hero scrollToProductList={scrollToProductList} />
            <Banner />
            <div ref={productListRef}>
                <ProductList />
            </div>
            <AddToCardLayout />
            <Footer />
        </div>
    );
}

export default Layout;
