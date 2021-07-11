
import React from 'react'
// import WeatherSvg from './imgs/WeatherSvg'
import CTA from './CTA'
import WeatherSearch from './WeatherSearch'

const Home = () => {
    return (
        <div>
            {/* first section */}
            <CTA />
            <div className='h-16'></div>
            <div >
                <WeatherSearch />
            </div>
        </div>
    )
}

export default Home
