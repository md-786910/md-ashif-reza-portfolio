import React, { useEffect } from 'react'
import Divider from '../Divider'
import ScrollReveal from "scrollreveal"

import "./about.css"

const img = "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp"

function About() {

    useEffect(() => {
        ScrollReveal({
            reset: true,
            delay: 100
        }).reveal('.headline');
    }, [])


    return (
        <div className="about headline" id="aboutPage">
            <div className="aboutTitle">
                <h1>
                    About
                </h1>
            </div>
            <Divider width="5%" />
            <br />
            <div className="aboutContent">

                <div className="aboutMe">

                    <div className="aboutDesc">
                        <p className="descriptionAbout">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum nobis nihil rerum sunt necessitatibus corrupti dolor at voluptas. Voluptatum sapiente, minus tempore natus, consequuntur praesentium unde laudantium laborum quas impedit mollitia, asperiores pariatur possimus odit deserunt! Numquam nam voluptatem eveniet consequatur pariatur excepturi consequuntur provident iste sed culpa ad eius suscipit tempore, cumque, a quae eos officia ab dolorem!
                        </p>
                        <div className="aboutName">
                            <h1>
                                Md Ashif Reza
                            </h1>
                        </div>
                        <div className="btnMore">
                            <button>
                                know more
                            </button>
                        </div>
                    </div>
                    <div className="aboutImage">
                        <img src={img} alt="" srcset="" />
                    </div>
                </div>

            </div>

        </div >
    )
}

export default About
