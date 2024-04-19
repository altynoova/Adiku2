import React from 'react'
import Header from '../component/Common/Header'
import Banner from '../component/Electronics/Banner'
import BannerBootom from '../component/Electronics/BannerBottom'
import TopPRoduct from '../component/Electronics/TotProduct'
import Offer from '../component/Electronics/Offer'
import DealProduct from '../component/Electronics/DealProduct'
import Footer from '../component/Common/Footer'

const Electronics = () => {
    return (
        <>
            <Header />
            <Banner />
            <TopPRoduct />
            <Offer />
            <Footer />
        </>
    )
}

export default Electronics