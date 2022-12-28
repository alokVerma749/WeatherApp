import { useNavigate } from 'react-router-dom'

const Landing = (props) => {
    const { data, setData, setUrl } = props

    const navigate = useNavigate()
    function handleClick(e) {
        e.preventDefault()
        try {
            setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            navigate('/dashboard')
        } catch (error) {
            throw new Error(error)
        }
        setData({
            country: '',
            city: ''
        })
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="absolute inset-0 bg-gray-300">
                <iframe className='grayscale-[1] contrast-[1.2] opacity-[0.4]' width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=ChIJkbeSa_BfYzARphNChaFPjNc
                India+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed">
                </iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <form onSubmit={handleClick} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Enter Loctaion</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Enter the location of the place of which you want to know the weather</p>
                    <div className="relative mb-4">
                        <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country</label>
                        <input type="text" id="country" name="country" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.country} onChange={e => setData({ ...data, country: e.target.value })} required />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.city} onChange={e => setData({ ...data, city: e.target.value })} required />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={data.city.length === 0}>Go Ahead</button>
                    <p className="text-xs text-gray-500 mt-3">Click on 'Go Ahead' button to see the weather information on the place</p>
                </form>
            </div>
        </section>
    )
}

export default Landing