
import React from 'react'
// import WeatherSvg from './imgs/WeatherSvg'
import CTA from './CTA'
import Card from './Card'

const Home = () => {
    return (
        <div>
            {/* first section */}
            <CTA />
            <div className='h-16'></div>
            <div >
                <Card className='' />
            </div>
        </div>
    )
}

export default Home
