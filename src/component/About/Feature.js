import React from 'react'
// import img
import img1 from '../../assets/img/icon/icon_about1.jpg'
import img2 from '../../assets/img/icon/icon_about2.jpg'
import img3 from '../../assets/img/icon/icon_about3.jpg'
import img4 from '../../assets/img/icon/icon_about4.jpg'

// Feature Data
const FeatureData = [
    {
        img: img1,
        title: "Creative Always",
        para: `Stay innovative with Adiku Group and explore the extensive range of pre-designed elements, layouts, and effects`
    },
    {
        img: img2,
        title: "Express order fulfillment.",
        para: `Efficiency of order fulfillment. Short terms - from 1 week..`
    },
    {
        img: img3,
        title: "Certification",
        para: `EAC Quality Standard Certificate.`
    },
    {
        img: img4,
        title: "Personal approach",
        para: `Development of patterns personally for the customer, selection of fabric and accessories.`
    }
]

const Feature = () => {
    return (
        <>
            <section id="service_promo_area" className="ptb-100">
                <div className="container">
                <div className="about_progressbar_content">
                                <h2>Our benefits</h2>
                    </div>
                    <div className="row">
                        {FeatureData.map((data, index) => (
                            <div className="col-lg-3 col-sm-6 col-12" key={index}>
                                <div className="service_promo_single_item">
                                    <div className="service_prom_image">
                                        <img src={data.img} alt="img" />
                                    </div>
                                    <div className="service_prom_content">
                                        <h3>{data.title}</h3>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
