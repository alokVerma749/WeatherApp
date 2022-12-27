import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css';
import Stats from '../components/Stats'
import Temp from '../components/Temp'
import SunTime from '../components/SunTime'

// {
//     base: "stations"
//     clouds: all
//     cod: 200
//     coord: { lon: 74.0833, lat: 15.3333 }
//     dt: 1672067850
//     id: 1271157
//     main: { temp: 26.21, feels_like: 26.21, temp_min: 26.21, temp_max: 26.21, pressure: 1013 }
//     name: "Goa"
//     sys: { type: 1, id: 9233, country: 'IN', sunrise: 1672018044, sunset: 1672058430 }
//     timezone: 19800
//     visibility: 10000
//     weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' }]
//     wind: { speed: 1.08, deg: 355, gust: 1.94 }
// }
function Dashboard(props) {
    const [status, setStatus] = useState('idle')
    const [weatherData, setWeatherData] = useState({})
    const [city, setCity] = useState('')
    const { url, setUrl, country } = props
    /*
     setWeatherData({
                    temp: result.data ? result.data.main && result.data.main.temp : "Loading",
                    temp_min: result.data ? result.data.data.main && result.data.main.temp_min : "Loading",
                    temp_max: result.data ? result.data.data.main && result.data.main.temp_max : "Loading",
                    feels_like: result.data ? result.data.data.main && result.data.main.feels_like : "Loading",
                    weather: result.data ? result.data.weather && result.data.weather[0].description : "Loading"
                });
     */
    const changeCity = function () {
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=375e92d0bef175a6c2dff24610d79dd5&units=metric`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(url);
                console.log(result.data)
                setWeatherData(result.data);
                setStatus('success');
            } catch (error) {
                setStatus('failed');
                throw new Error(error);
            }
        };
        fetchData();
    }, [url]);

    return (
        // <p>{weatherData ? weatherData.main && weatherData.main.temp : "Loading..."}</p>
        <div className="main h-[100vh] w-[100%] bg-gradient-to-r from-[#F0B5CE] to-[#8C6BAE] text-white flex flex-col md:flex-row">
            <h1>{
                status === 'success' ? 'Data fetched successfully' : 'Data fetching failed'
            }</h1>
            <div className="inputField">
                <form onSubmit={changeCity}>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)} />
                    <button type="submit">Change City</button>
                </form>
            </div>
            <div className="left w-[60vw] border-2 border-red-600 h-[100vh]">
                <Temp temp={weatherData ? weatherData.main && weatherData.main.temp : "Loading"} feels_like={weatherData ? weatherData.main && weatherData.main.feels_like : "Loading"} temp_max={weatherData ? weatherData.main && weatherData.main.temp_max : "Loading"} temp_min={weatherData ? weatherData.main && weatherData.main.temp_min : "Loading"} weather={weatherData ? weatherData.weather && weatherData.weather[0].description : "Loading"} />
                <Stats wind={weatherData ? weatherData.wind && weatherData.wind.speed : "Loading"} />
                <div className="sunTimeCards w-[100%] m-auto flex flex-col md:flex-row md:w-[70%] justify-evenly">
                    <SunTime sunrise={weatherData ? weatherData.sys && weatherData.sys.sunrise : "Loading"} sunset={weatherData ? weatherData.sys && weatherData.sys.sunset : "Loading"} />
                </div>
            </div>
            <div className="right w-[38vw] float-left border-2 border-red-600 h-[100vh] flex justify-center items-center text-6xl ">
                <h2 className={"text-center subpixel-antialiased tracking-wide leading-12 drop-shadow-2xl backdrop-blur-2xl"}>Hello, <span className='indent-12'>{weatherData ? weatherData.name && weatherData.name : "Loading..."}</span></h2>
            </div>
        </div>
    );
}

export default Dashboard;