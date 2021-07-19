import React from 'react'

export default function DisplayCityName(props){
    const {json} = props;
    return <div>
        <div>
            <span>
                {json.name}, {json.sys.country}
            </span>
            <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                {json.main.temp}
            </p>
        </div>

    </div>
}