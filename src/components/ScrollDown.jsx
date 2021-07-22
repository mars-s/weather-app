import { ImArrowDown2 } from 'react-icons/im'

import React from 'react'

const ScrollDown = () => {
    return (
        <div className='flex justify-center rounded-full bg-pink-100 mx-56 pt-2 pl-2 mb-5 transition duration-500 ease-in-out transform hover:scale-110'>
            <div className='mt-2'>
                <p className="inline-block px-3 py-px mb-4 text-s font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Scroll Down 
                </p>
            </div>
            <div className='rounded-full bg-pink-100 p-3 transition duration-500 ease-in-out transform hover:scale-110 '>
                <ImArrowDown2 className='text-2xl' />
            </div>
        </div>
    )
}

export default ScrollDown