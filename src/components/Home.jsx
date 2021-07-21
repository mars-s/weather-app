import React from 'react'
import { Helmet } from 'react-helmet'

// import WeatherSvg from './imgs/WeatherSvg'
import CTA from './CTA'
import WeatherSearch from './WeatherSearch'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Star Field | Home</title>
            </Helmet>
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
