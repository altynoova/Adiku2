import React from 'react'
// import Img
import img from '../../../assets/img/electronics/common/promotion.png'

// Offer Data
const OfferData = [
    {
        icon: "fa fa-free-code-camp ",
        para: "Latest Men's Fashion Trends"
    },
    {
        icon: "fa fa-percent",
        para: "Seasonal Discounts"
    },
    {
        icon: "fa fa-check-square",
        para: "Quality Guaranteed"
    }
]

const Offer = () => {
    return (
        <>
            <section id="promotion_banner" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="elec_promo_text">
                                <h2>Discover the Latest in Men's Clothes <br /> Adiku Group</h2>
                                <p>Upgrade your style with our latest collection. Find the perfect fit and embrace the trends of the season.</p>
                                <div className="elec_promo_icon">
                                    {OfferData.map((data, index) => (
                                        <div className="icon_promo_item" key={index}>
                                            <i className={data.icon}></i>
                                            <p>{data.para}</p>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="promotion_img">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Offer