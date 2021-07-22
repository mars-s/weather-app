import React from 'react'

export default function DisplayWeather(props){
    const {json} = props;
    return <div>
        <div>
            <span className="mt-4 mb-8 text-m text-xl font-extrabold tracking-wider text-center text-gray-900 lg:mt-0 title-font pt-3">
                {json.name}, {json.sys.country}
            </span>
        <div className="mt-4 mb-8 text-3xl font-extrabold tracking-widest text-gray-800 text-justify leading-6 lg:mt-0 title-font pt-3">
                {Math.round(json.main.temp)}℃
            </div>
        </div>

    </div>
}