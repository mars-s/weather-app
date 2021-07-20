import React from 'react'

export default function DisplayWeather(props){
    const {json} = props;
    return <div>
        <div>
            <span>
                {json.name}, {json.sys.country}
            </span>
            <div className="mb-3 text-base leading-relaxed text-blueGray-500">
                {json.main.temp}℃
            </div>
        </div>

    </div>
}