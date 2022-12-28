import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        <div className="main h-[100vh] w-[100%] bg-gradient-to-r from-[#F0B5CE] to-[#8C6BAE] text-white flex flex-col justify-center items-center p-5">
            <fieldset className="space-y-1 dark:text-gray-100 mb-8">
                <label htmlFor="Search" className="hidden">Search</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <form onSubmit={changeCity}>
                        <input type="search" name="Search" placeholder="Search..." className=" text-black w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" value={city} onChange={e => setCity(e.target.value)} />
                        <button type="submit" className="border border-white px-2 py-1 mx-2 font-medium rounded-full dark:bg-gray-100 dark:text-gray-800 hover:bg-white hover:text-black hover:border-transparent ease-in-out duration-300 animate-pulse transition-all delay-75">Change City</button>
                    </form>
                </div>
            </fieldset>
            <h1>{
                status === 'success' ? 'Data fetched successfully' : 'Data fetching failed'
            }</h1>
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
                <div className="text-center">
                    <p className="text-sm dark:text-gray-400">{new Date().toDateString()}</p>
                </div>
                <div className="flex items-end justify-end h-32 p-4 dark:bg-gray-500 bg-center bg-cover">
                    <p className="px-2 py-1 text-sm tracking-widest dark:text-gray-100 uppercase dark:bg-gray-800 bg-opacity-75 rounded shadow-lg">{weatherData ? weatherData.name && weatherData.name : "Loading..."}</p>
                </div>
                <div className="flex justify-between p-4">
                    <div className="flex flex-col flex-1 gap-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <span className="text-5xl font-semibold">{weatherData ? weatherData.main && weatherData.main.temp : "Loading..."}°</span>
                                <span className="text-lg dark:text-gray-400">/ {weatherData ? weatherData.main && weatherData.main.feels_like : "Loading..."}°</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 dark:text-yellow-400 fill-current shrink-0">
                                <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                                <rect width="32" height="48" x="240" y="16"></rect>
                                <rect width="32" height="48" x="240" y="448"></rect>
                                <rect width="48" height="32" x="448" y="240"></rect>
                                <rect width="48" height="32" x="16" y="240"></rect>
                                <rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
                                <rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
                                <rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
                                <rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
                            </svg>
                        </div>
                        <p className="text-sm">{weatherData ? weatherData.weather && weatherData.weather[0].description : "Loading..."}
                            <br />{weatherData ? weatherData.wind && weatherData.wind.speed : "Loading..."} KPH winds.
                        </p>
                    </div>
                    <div className="text-sm leading-loose">
                        <div className="flex items-center"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-8 p-4 border-t dark:text-gray-400 dark:border-gray-700">
                    <div className="flex items-center space-x-1">
                        <span className="font-bold">{weatherData ? weatherData.main && weatherData.main.humidity : "Loading..."}</span>
                        <span className="text-sm">Humidity</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="font-bold">{weatherData ? weatherData.visibility && weatherData.visibility / 1000 : "Loading..."}Km</span>
                        <span className="text-sm">Visibility</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="font-bold">14°</span>
                        <span className="text-sm">Dew Point</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;