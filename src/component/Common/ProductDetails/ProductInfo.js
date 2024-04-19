import React from 'react'
// import Img
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.png'
import user3 from '../../../assets/img/user/user3.png'

const ReviewData = [
    {
        img: user1,
        name: "Sara Anela",
        date: "5 days ago",
        replay: "Replay",
        report: "Report",
        para: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
        scelerisque Praesent sapien massa, convallis a pellentesque nec,
        egestas non nisi. Cras ultricies ligula sed magna dictum porta.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Vivamus magna justo.`
    },
    {
        img: user2,
        name: "Sara Anela",
        date: "5 days ago",
        replay: "Replay",
        report: "Report",
        para: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
        scelerisque Praesent sapien massa, convallis a pellentesque nec,
        egestas non nisi. Cras ultricies ligula sed magna dictum porta.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Vivamus magna justo.`
    },
    {
        img: user3,
        name: "Sara Anela",
        date: "5 days ago",
        replay: "Replay",
        report: "Report",
        para: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
        scelerisque Praesent sapien massa, convallis a pellentesque nec,
        egestas non nisi. Cras ultricies ligula sed magna dictum porta.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Vivamus magna justo.`
    },

]

const ProductInfo = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product_details_tabs">
                        <ul className="nav nav-tabs">
                            <li><a data-toggle="tab" href="#description" className="active">Description</a></li>
                            <li><a data-toggle="tab" href="#additional">Additional Information</a></li>
                            <li><a data-toggle="tab" href="#review">Review</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="description" className="tab-pane fade in show active">
                                <div className="product_description">
                                    <p>Step up your fashion game with our stunning collection of black blouses tailored exclusively for the modern woman. Crafted with meticulous attention to detail, these blouses effortlessly blend timeless elegance with contemporary style.</p>
                                    <ul>
                                        <li>Premium Quality Material</li>
                                        <li>Versatile Design</li>
                                        <li>Flattering Fit</li>
                                    </ul>
                                    <p>Why Choose Our Black Blouses?

Timeless Appeal: Black never goes out of style. It's a classic color that exudes sophistication and elegance, making it a must-have in every woman's wardrobe.
Easy Care: Our blouses are easy to care for, requiring minimal maintenance to keep them looking as good as new.
Affordable Luxury: Experience luxury without breaking the bank. Our black blouses offer premium quality at affordable prices, ensuring you get great value for your money.
Upgrade your wardrobe with our exquisite collection of black blouses and make a style statement wherever you go. Whether you're attending a special occasion or simply want to elevate your everyday look, our black blouses are the perfect choice for you. Shop now and discover the perfect blouse that suits your style!
                                    </p>
                                </div>
                            </div>
                            <div id="additional" className="tab-pane fade">
                                <div className="product_additional">
                                    <ul>
                                        <li>Weight: <span>400 g</span></li>
                                        <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                                        <li>Materials: <span> 60% cotton, 40% polyester</span></li>
                                        <li>Other Info: <span> American heirloom jean shorts pug seitan
                                            letterpress</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="review" className="tab-pane fade">
                                <div className="product_reviews">
                                    <ul>
                                        {ReviewData.map((data, index) => (
                                            <li className="media" key={index}>
                                                <div className="media-img">
                                                    <img src={data.img} alt="img" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="media-header">
                                                        <div className="media-name">
                                                            <h4>{data.name}</h4>
                                                            <p>{data.date}</p>
                                                        </div>
                                                        <div className="post-share">
                                                            <a href="#!" className="replay">{data.replay}</a>
                                                            <a href="#!" className="">{data.report}</a>
                                                        </div>
                                                    </div>
                                                    <div className="media-pragraph">
                                                        <div className="product_review_strat">
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                        </div>
                                                        <p>{data.para}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo