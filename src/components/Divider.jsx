import React from 'react'

function Divider({ width, dir }) {

    return (
        <div className="divider" style={{

            backgroundColor: "rgb(25, 15, 36)",
            height: "3px",
            width: width,
            margin: "5px auto"

        }}>

        </div>
    )
}


export default Divider
