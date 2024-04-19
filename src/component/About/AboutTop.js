import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.png'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT OUR COMPANY</h2>
                                <h4>Adiku group is your reliable partner in creating stylish and high-quality clothing. We will be
glad to cooperate and create beautiful and stylish images with you.</h4>
                                <p><strong>"Adiku Group</strong> is a clothing company that combines the experience and talent of the best
                                designers. We specialize in the production of high-quality men's, women's and children's
                                clothing, combining modern trends and classic style"</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
