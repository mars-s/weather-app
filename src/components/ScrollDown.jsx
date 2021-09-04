import { ImArrowDown2 } from 'react-icons/im'

import React from 'react'

const ScrollDown = (props) => {
    return (
        <div className='flex justify-center rounded-full
        bg-pink-500 group hover:bg-gray-800 mx-56 pt-2 pl-2 mb-5 
        transition duration-500 ease-in-out transform hover:scale-110 shadow-lg'>
            <div className='mt-3'>
                <p className="inline-block px-3 mb-4 pl-9 text-s 
                text-white transition duration-500 group-hover:text-white 
                font-semibold tracking-wider text-teal-900 uppercase bg-teal-accent-400">
                {props.text}
                </p>
            </div>
            <div className='rounded-full bg-pink-500 text-white p-3.5 mr-3 mb-2 
            transition duration-500 group-hover:bg-gray-800 group-hover:text-white ease-in-out'>
                <ImArrowDown2 className='text-2xl text-center' />
            </div>
        </div>
    )
}

export default ScrollDown