import React from 'react'
import BabyHeading from '../Heading'
import { Link } from 'react-router-dom'
// import Img
import Img1 from '../../../assets/img/baby-shop/product/cat-1.png'
import Img2 from '../../../assets/img/baby-shop/product/cat-2.png'
import Img3 from '../../../assets/img/baby-shop/product/cat-3.png'
import Img4 from '../../../assets/img/baby-shop/product/cat-4.png'
import Img5 from '../../../assets/img/baby-shop/product/cat-5.png'
import Img6 from '../../../assets/img/baby-shop/product/cat-6.png'
const CategoryDate = [
    {
        img: Img1,
        title: "Children's  dress",
        item: "20 Items"
    },
    {
        img: Img2,
        title: "Girls T-Shirts",
        item: "34 Items"
    },
    {
        img: Img3,
        title: "Boys T-Shirts",
        item: "10 Items"
    },
    {
        img: Img4,
        title: "Children's  twosome",
        item: "55 Items"
    },
    {
        img: Img5,
        title: "Shorts",
        item: "90 Items"
    },
    {
        img: Img6,
        title: "Baby shirts",
        item: "13 Items"
    },

]
const Category = () => {
    return (
        <>
            <section id="baby_shop_categories" className="pb-100">
                <div className="container">
                    <BabyHeading heading="Shop by Category" />
                    <div className="row">
                        {CategoryDate.map((data, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={index}>
                                <div className="baby_category_card">
                                    <Link to="#">
                                        <div className="baby_cat_img">
                                            <img src={data.img} alt="img" />
                                        </div>
                                        <div className="baby_cat_content">
                                            <h5>{data.title}</h5>
                                            <p>{data.item}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Category