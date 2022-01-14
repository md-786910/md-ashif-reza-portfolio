import React from 'react'
import Divider from '../Divider'
import { ProgressBar } from 'react-bootstrap';

import "./contact.css"
function Contact() {
    return (
        <>
            <div className="contactPage" id="contactPage">
                <div className="contactTitle">
                    <h1>
                        Contact Us
                    </h1>
                </div>
                <Divider width="10%" />

                <div className="contactForm">

                    <div className="contactLeft">
                        <div className="getTouch">
                            <h2>
                                Get in touch 👋
                            </h2>

                            <div className="contactDesc">
                                <p>
                                    <i className="fa fa-2x fa-quote-left me-2" style={{ color: '#231d3f' }} ></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum alias, incidunt debitis inventore libero quibusdam.
                                </p>
                            </div>

                            <div className="contactsSign">
                                <div className="contactSign1">
                                    <i className="fa fa-user"></i>
                                    <span className="spanContactTitle">
                                        Name
                                    </span>
                                    <p>
                                        Md Ashif Reza
                                    </p>

                                </div>
                                <div className="contactSign1">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <span className="spanContactTitle">
                                        Address
                                    </span>
                                    <p>
                                        Bihar Muzaffarpur
                                    </p>
                                </div>
                                <div className="contactSign1">
                                    <i className="fa fa-envelope"></i>
                                    <span className="spanContactTitle">
                                        Email
                                    </span>
                                    <p>
                                        mdashifreza3@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contactRight">

                        <div className="contactTitleUs">
                            <h2>
                                💁‍♂️ Contact Us
                            </h2>
                        </div>

                        <div className="contactFormPage">

                            <div className="name_email">
                                <input type="text" name="name" id="" placeholder="Name" className="emailAndName" />
                                <input type="email" name="email" id="" placeholder="Email" className="emailAndName" />
                            </div>

                            <div className="contactSubject">
                                <input type="text" name="subject" id="contactSubject1" placeholder="Subject" />
                            </div>

                            <div className="contactTextArea">
                                <textarea name="message" id="" placeholder="message" ></textarea>
                            </div>

                            <div className="btnMessage">
                                <button>
                                    message me
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
