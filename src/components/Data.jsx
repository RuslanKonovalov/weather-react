import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";

const Data = () => {
    const [city, setCity]= useState('');
    const [time, setTime] = useState('');

    return (
        <div className={'col-sm-7 form'}>
            <Form setCity={setCity} setTime={setTime}/>
            <Weather city={city} time={time}/>
        </div>
    );
};

export default Data;