import React from 'react'
import { Helmet } from 'react-helmet'
import Feature from './Feature'
import CTA from './CTA'

const Home = () => {
    return (
        <div className='bg-gray-100'>
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
