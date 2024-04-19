import React from 'react'
import Map from './Map'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const ContactTwoArea = () => {
    return (
        <>
            <section id="contact_area" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact_form_one contact_info_wrapper">
                                <h3 className="text-center">Get In Touch</h3>
                                <form onSubmit={(e) => { e.preventDefault(); Swal.fire('Thank You', 'We Got Your Message', 'success') }}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" name="phone" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea rows="7" className="form-control" name="message" placeholder="Message"></textarea>
                                            </div>
                                            <div className="submit_bitton_contact_one">
                                                <button value="Submit" className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="left_side_contact contact_info_wrapper">
                                <ul>
                                    <li className="address_location">
                                        <div className="contact_widget ">
                                            <i className="fa fa-map-marker"></i>
                                            <p>:12/1 PMK - 3 str., Leninskoye village <br /> Alamudunsky district, Bishkek city, Kyrgyz Republic</p>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-phone"></i>
                                            <Link to="/">+996707 163 050</Link>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-globe"></i>
                                            <Link to="/">adiku-group.com.kg</Link>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-instagram"></i>
                                            <a href="https://www.instagram.com/adiku.group.kg/" target="_blank" rel="noopener noreferrer">@adiku.group.kg</a>
                                        </div>
                                    </li>
                                    <li className="address_location">
                                        <div className="contact_widget">
                                            <i className="fa fa-paper-plane"></i>
                                            <a href="https://t.me/Mariia8008" target="_blank" rel="noopener noreferrer">@adiku-group</a>
                                        </div>
                                    </li>
                                </ul>

                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactTwoArea