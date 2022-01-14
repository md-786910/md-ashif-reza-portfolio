import React from 'react'
import Divider from '../Divider'
import Project from '../projects/Project'
import "./features.css"
function Features() {
    return (
        <div className="features">
            <br />

            <div className="projectTitle">
                <h1>
                    Project & Features
                </h1>
            </div>
            <Divider width="15%" />


            <div className="projects">
                <Project />

            </div>

        </div >
    )
}

export default Features
