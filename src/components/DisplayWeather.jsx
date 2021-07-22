import React from 'react'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export default function DisplayWeather(props){
    const {json} = props;
    const iconUrl = "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@4x.png"
    return <div>
        <div className=" object-right-top">
            <div className="">
                <img src={iconUrl} alt="Weather Icon" className="h-48 w-48"/>
                <span className="mt-4 mb-8 text-m text-xl font-extrabold tracking-wider text-gray-900 lg:mt-0 title-font pt-3">
                        {json.name}, {json.sys.country}
                    </span>
                    <div className="mt-4 text-3xl font-extrabold tracking-widest text-gray-800 leading-6 lg:mt-0 title-font pt-3">
                        {Math.round(json.main.temp)}℃
                    </div>
                    <div className="mt-4 mb-8 text-m text-lg font-bold tracking-wider ml-px text-gray-900 lg:mt-0 title-font pt-3">
                        {capitalizeFirstLetter(json.weather[0].description)}
                    </div>
            </div>
        </div>

    </div>
}