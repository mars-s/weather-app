import React, { useState } from 'react'
import { Combobox } from 'evergreen-ui'

const TextLookUp = (id) => {
    return document.getElementById(id).value
}

const WeatherMode = (cities) => {

    //const [WeatherMode, setWeatherMode] = useState('default')

    return (
        <div>
            <Combobox
            id={'WeatherSearchText'}
            openOnFocus
            items={cities}
            onChange={selected => console.log(selected)}
            placeholder="City or Country"
            />
        </div>
    )
}

export default WeatherMode
