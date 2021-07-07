import React from 'react'

const Button = (props) => {
    return (
        
        <button
            class="bg-blue-500 py-2 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-400">
            {props.text}
        </button>
        
    )
}

export default Button
