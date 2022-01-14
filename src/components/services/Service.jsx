import React, { useEffect, useState } from 'react'
import Divider from '../Divider'
import "./service.css"
import ScrollReveal from 'scrollreveal'
import 'animate.css';

const img = "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp"



function Service() {
    const [state, setState] = useState("")

    const serviceData = [

        {
            title: "The man of book",
            description: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aperiam?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
        },
        {
            title: "The man of book",
            description: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aperiam?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
        },
        {
            title: "The man of book",
            description: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, aperiam?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
        },


    ]

    useEffect(() => {
        ScrollReveal({
            reset: true,
            delay: 100
        }).reveal('.headline');



        window.addEventListener("scroll", (e) => {

            const { scrollTop } = document.documentElement
            console.log(scrollTop)

            if ((scrollTop >= 2913 && scrollTop <= 3567)) {

                setState("animate__rotateInDownLeft")
            }
        })

    }, [])

    return (
        <>
            <div className="services ">
                <div className="serviceTitle">
                    <h1>
                        service
                    </h1>
                    <Divider width="6%" />
                </div>

                {/* <div className="moveArrow">
                    <div className="left_rigth_arrow">
                        <i className="fa  fa-arrow-left" onClick={() => moveLeftArrow()}></i>
                        <i className="fa   fa-arrow-right" onClick={() => moveRightArrow()}></i>
                    </div>
                </div> */}

                <div className="serviceWrapper">

                    {
                        serviceData.map((elem, index) => {
                            return (
                                <div className={`serviceItems headline animate__animated ${state}`} key={index}>

                                    <div className="serviceBg">
                                        {/* add bg */}
                                    </div>

                                    <div className="serviceImage">
                                        <img src={elem.imageUrl} alt="" />
                                    </div>

                                    <div className="serviceName">
                                        <h2>
                                            {elem.title}
                                        </h2>
                                        <Divider width="30%" />
                                    </div>


                                    <div className="spanDesc">
                                        <p>
                                            {elem.description}
                                        </p>
                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Service

