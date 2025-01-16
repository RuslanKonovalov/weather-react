import {api_key, base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";
import {weather_cache_time} from "../utils/constants.js";


const Weather = ({city,time}) => {
    const [weather, setWeather] = useState({});
    const [message, setMessage] = useState('Enter city name');
    // const [time, setTimeStamp] = useState(0);


    const getWeather = async () => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            setWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000,
            })
            // setTimeStamp(Date.now());
            setMessage('');
        } catch (e) {
            setMessage(e.message);
        }
    }

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [city]);

    useEffect(() => {
        const now = Date.now();
        const internal = setInterval(() => {
            //TODO
            if  ((city === weather.city) && ((now - time) < weather_cache_time))
                getWeather();
        }, weather_cache_time);
        return () => clearInterval(internal);
    }, [city,time])


    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    );

};

export default Weather;