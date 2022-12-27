import React from 'react'

const Temp = (props) => {
    const { temp_min, temp_max, feels_like, temp, weather } = props
    return (
        <div className='width-[700px] height-[900px]'>
            <div className="primary">
                <h4>Temp:{temp ?? 'Loading data...'}</h4>
                <div className="secondary">
                    <p>
                        feels like:{feels_like ?? 'Loading data...'}
                    </p>
                    <p>
                        Max:{temp_max ?? 'Loading data...'}
                    </p>
                    <p>
                        Min:{temp_min ?? 'Loading data...'}
                    </p>
                </div>
            </div>
            <div className="weather">
                <h3>Weather:{weather ?? 'Loading data...'}</h3>
            </div>
        </div>
    )
}

export default Temp