import React from 'react'

const SunTime = (props) => {
    const { sunrise, sunset } = props
    return (
        <>
            <div className="card w-[80vw] m-auto md:w-[300px] md:m-1">
                <div className="content">
                    <p>Sunrise: {(new Date(sunrise).toLocaleTimeString()) ?? 'Loading Data'}</p>
                </div>
            </div>
            <div className="card w-[80vw] m-auto md:w-[300px] md:m-1">
                {/* <img src="" alt="" /> */}
                <div className="content">
                    <p>Sunset: {(new Date(sunset).toLocaleTimeString()) ?? 'Loading Data'}</p>
                </div>
            </div>
        </>
    )
}

export default SunTime