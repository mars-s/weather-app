import { useState, useEffect } from 'react';
import Select from 'react-select';
import DisplayWeather from './DisplayWeather';
import options from './Cities';


const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'

export default function WeatherSearch() {
    let [selectedOption, setSelectedOption] = useState('null');
    let [Query, setQuery] = useState({})
    let iconCode = '10d'
    let iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@4x.png";
    //http://openweathermap.org/img/wn/10d@2x.png

    useEffect(() => {
        if (selectedOption !== 'null') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedOption.label}&appid=${apiKey}&units=metric`)
                .then(Response => Response.json())
                .then(json => setQuery(
                    {
                        json : json
                    }
                ))
        }
    }, [selectedOption])
        

    return (
        <div className="container items-center px-5 py-12 lg:px-20">
            <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-4 '>
                        <div className="App">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                    </div>

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
}
