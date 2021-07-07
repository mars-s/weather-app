import React from 'react'
import AutoCompleteSearch from './AutocompleteSearch'
import Button from './Button'

const Card = () => {
    return (
        
        <div class="container items-center px-5 py-12 lg:px-20">
            <div class="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3 '>
                        <AutoCompleteSearch />
                    </div>
                    <Button text='Search' />
                </div>
                <div class="flex flex-col items-start py-2 rounded-lg lg:flex-row">

                    <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                        <img src="https://dummyimage.com/200x200/F3F4F7/8693ac" alt="placeholder" class="rounded-lg" />
                    </div>
                    <div class="flex flex-col w-full text-blueGray-500 lg:ml-4 p-3">
                        
                        
                        <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font pt-3">weather summary will go here</h2>
                        <p class="mb-3 text-base leading-relaxed text-blueGray-500">a short description of the weather will go here, and the icon of the weather state will go in the picture.</p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Card
