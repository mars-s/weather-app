import React from 'react'
import { Helmet } from 'react-helmet'

// import WeatherSvg from './imgs/WeatherSvg'
import CTA from './CTA'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Star Field | Home</title>
            </Helmet>
            {/* first section */}
            <CTA />
        </div>
    )
}

export default Home
