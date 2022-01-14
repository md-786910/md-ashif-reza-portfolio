import React, { useEffect, useState } from 'react'
import Divider from '../Divider'
import { ProgressBar } from 'react-bootstrap';
import ScrollReveal from "scrollreveal"
import "./experience.css"
function Experience() {

    const [countHtml, setHtml] = useState(90)

    // set progress bar

    // html
    // const interval = setInterval(() => {

    //     // html
    //     setHtml((preCount) => {
    //         const newCount = preCount + 5

    //         if (newCount === 90) {
    //             clearInterval(interval)
    //         }
    //         setHtml(90)
    //         return newCount;
    //     })
    // }, 100);


    useEffect(() => {
        ScrollReveal({
            reset: true,
            delay: 100
        }).reveal('.headline');
    }, [])



    return (
        <>
            <div className="experience headline">
                <div className="experienceTitle">
                    <h1>
                        Experience & Skills
                    </h1>
                    <Divider width="15%" />
                </div>

                <div className="expBox">

                    <div className="leftExp">
                        <h2 className="expHeader">
                            My creative skills & experience
                        </h2>
                        <Divider width="5%" />

                        <div className="expDesc">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ea nesciunt quis suscipit ducimus quod praesentium vel fugit corrupti quam, dolorum dignissimos? Beatae reprehenderit voluptatem officia rerum amet provident impedit soluta, cum minus. Libero reiciendis assumenda soluta a mollitia est.
                            </p>
                        </div>
                        <div className="expBtn">
                            <button >
                                show skills
                            </button>
                        </div>
                    </div>
                    <div className="rightExp">

                        <div className="expLineBar">

                            <div className="expProgress">
                                <h6>
                                    HTML
                                </h6>
                                <ProgressBar striped animated variant="success" now={countHtml} label={`${countHtml}%`} max={100} />
                            </div>

                            <div className="expProgress">
                                <h6>
                                    CSS
                                </h6>
                                <ProgressBar striped variant="success" now={80} label="80%" />
                            </div>

                            <div className="expProgress">
                                <h6>
                                    JAVASCRIPT
                                </h6>
                                <ProgressBar striped variant="info" now={75} label="75%" />
                            </div>

                            <div className="expProgress">
                                <h6>
                                    REACT JS
                                </h6>
                                <ProgressBar striped variant="success" now={70} label="70%" />
                            </div>

                            <div className="expProgress">
                                <h6>
                                    NODE JS
                                </h6>
                                <ProgressBar striped variant="warning" now={60} label="60%" />
                            </div>
                            <div className="expProgress">
                                <h6>
                                    MONGO DB
                                </h6>
                                <ProgressBar striped variant="danger" now={50} label="50%" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
