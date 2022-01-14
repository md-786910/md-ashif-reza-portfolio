import React, { useEffect, useState } from 'react'
import ScrollReveal from "scrollreveal"
import "./project.css"
import 'animate.css';
const img = "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp"
function Project() {
    const [state1, setState1] = useState("")

    const projectData = [

        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
        },
        {
            title: " Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, earum?",
            imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.webp",
            link: "https://www.github.com/md-786910"
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

            if ((scrollTop >= 590 && scrollTop <= 2495)) {

                setState1("animate__flipInY")
            }
        })
    }, [])


    return (
        <div className="projectMany" id="projectPPage">
            <br />

            <div className="projectCard ">

                {
                    projectData.map((elem, index) => {
                        return (
                            <div className={`wrapper  animate__animated ${state1} `} key={index}>
                                <div className="ImageCard">
                                    <img src={img} className="image_project" />
                                </div>
                                <div className="box_card">
                                    <div className="projectTitle1">
                                        <h1>
                                            {elem.title}
                                        </h1>
                                    </div>
                                    <div className="projectDesc">
                                        <p>
                                            {elem.description}
                                        </p>
                                    </div>
                                    <div className="btnView">
                                        <a href={elem.url} target="_blank">
                                            <button className="codeBtn">
                                                view code
                                            </button>
                                        </a>
                                        <button className="codeBtn">
                                            download code
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Project
