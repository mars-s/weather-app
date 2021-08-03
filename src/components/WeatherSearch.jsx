import { useState, useEffect } from 'react';
import DisplayWeather from './DisplayWeather';
import options from './Cities';


const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'

export default function WeatherSearch() {
    let [selectedOption, setSelectedOption] = useState('null');
    let [Query, setQuery] = useState({})
    //http://openweathermap.org/img/wn/10d@2x.png

    const search = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedOption}&appid=${apiKey}&units=metric`)
                .then(Response => Response.json())
                .then(json => setQuery(
                    {
                    json : json
                    }
                ))
        }
    }
        

    return (
        <div className="container items-center px-5 py-12 lg:px-20">
            <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                <div className="pt-2 relative mx-auto text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search" name="search" placeholder="Enter to Search" onChange={e => setSelectedOption(e.target.value)} onKeyPress={search}/>
                </div>
                <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                    <div className="flex flex-col w-full text-blueGray-500 lg:ml-4 p-3">
                        
                        {
                            Query.json !== undefined ?

                            <h2>
                                <DisplayWeather json={Query.json} />
                            </h2>
                        
                            : null
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};