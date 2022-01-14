import Typed from 'typed.js';
import { useEffect } from 'react'

import Svg from '../Svg.jsx';

import "./header.css"

function Header() {


    useEffect(() => {
        new Typed('#typed', {
            strings: ["Hello ^1000,I am Md ashif reza", "I am full stack developer", "I am good programmer"],
            loop: true,
            smartBackspace: true,
            typeSpeed: 100,
            backSpeed: 10,
            fadeOut: false,
        });
    }, [])

    return (
        <>
            <div className="header" id="homePage">

                <div className="header_items">
                    <div className="header_list">
                        <h2><span style={{ color: "red", fontSize: "30px" }}>M</span><span style={{ color: "white", fontSize: "30px", marginLeft: "10px" }}>@Portfolio</span></h2>

                        <ul className="list_item">
                            <li className="items " >
                                <a href="#homePage">Home</a>
                            </li>
                            <li className="items"><a href="#aboutPage">About</a></li>

                            <li className="items">
                                <a href="#projectPPage">Project</a>
                            </li>
                            <li className="items">
                                <a href="#contactPage">
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 
                <div className="resumeCard" style={{ color: "white" }}>
                    <h1>
                        3uui 4uio3u4i o
                        <br />
                        <br />
                        <br />
                    </h1>
                    <Resume />
                </div> */}

                <div className="features_divider">

                    <div className="left">
                        <dic className="socialIcon ">
                            <span className="icon1">
                                <img src="https://img.icons8.com/ios-glyphs/50/4a90e2/facebook-f.png" className="iconImage" />
                            </span>
                            <span className="icon1">
                                <img src="https://img.icons8.com/ios/50/4a90e2/instagram-new--v3.png" className="iconImage" />
                            </span>
                            <span className="icon1">
                                <img src="https://img.icons8.com/ios/50/4a90e2/xbox.png" className="iconImage" />
                            </span>
                            <span className="icon1">
                                <img src="https://img.icons8.com/ios-glyphs/50/4a90e2/twitter--v1.png" className="iconImage" />
                            </span>

                        </dic>

                        <div className="title_user">

                            {/* start typed js */}
                            <div id="typed-strings">
                            </div>
                            <span id="typed"></span>
                            {/* end */}

                            <div className="stack">
                                <h1>
                                    Full Stack Develoepr & Programmer
                                </h1>

                                <div className="brief">
                                    <p>
                                        I am <b> 3rd year</b> student of <b>computer science</b> . west bengal 🏹 berdhmann university
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="btn_combibe">
                            <button className="btnHire btnClass">
                                Hire me
                            </button>
                            <button className="btnResume btnClass">
                                <a href="./images/resume.pdf" style={{ color: "black" }} download="Md resume">Download Resume</a>
                            </button>
                        </div>

                    </div>

                    <div className="right">
                        <div className="right_user">
                            <img src="./images/userIcon.png" className="user_image" alt="" />
                        </div>
                    </div>
                </div>

                {/* make curve here */}
                <div className="svg">
                    <Svg />
                </div>
            </div>

        </>
    )
}

export default Header
