import React from 'react'
import windImg from '../assets/wind.png'
import humidityImg from '../assets/humidity.png'
import rainImg from '../assets/rain.png'

const Stats = (props) => {
    const { wind } = props
    return (
        <div className="stats w-[60%] p-[5px] mx-auto flex justify-evenly border-2 border-red-600">
            <div className="wind flex justify-evenly border-2 border-red-600">
                <img src={windImg} alt="" />
                <p>Wind: {wind ?? 'Loading Data'} km/hr</p>
            </div>
            <div className="humidity flex justify-evenly border-2 border-red-600">
                <img src={humidityImg} alt="" />
                <p>Humidity: %</p>
            </div>
            <div className="rain flex justify-evenly border-2 border-red-600">
                <img src={rainImg} alt="" />
                <p>Rain: %</p>
            </div>
        </div>
    )
}

export default Stats    