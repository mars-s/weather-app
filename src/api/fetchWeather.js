import axios from './axios'



const fetchWeather = async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedOption.label}&appid=${apiKey}`)
}

export default fetchWeather
