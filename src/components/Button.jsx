import React from 'react'

const Button = (props) => {
    return (
        
        <button
            class="bg-blue-500 p-1.5 text-lg px-4 border-b-4 border-blue-800 rounded text-white hover: hover:bg-blue-400 rounded-lg">
            {props.text}
        </button>
        
    )
}

export default Button
