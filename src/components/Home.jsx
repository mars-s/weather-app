import React from 'react'
import { Helmet } from 'react-helmet'
import Feature from './Feature'
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
            <Feature />
        </div>
    )
}

export default Home
