import React from 'react'
import ProductDetail from '../components/Products/ProductDetail'
import Navbar from '../components/layout/Navbar'
import AddToCardLayout from '../components/layout/AddToCardLayout'


function DetailPage() {
    return (
        <div>
            <Navbar></Navbar>
            <ProductDetail></ProductDetail>
            <AddToCardLayout></AddToCardLayout>
        </div>
    )
}

export default DetailPage