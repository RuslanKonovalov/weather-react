import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";

const Data = () => {
    const [city, setCity]= useState('');
    // const [time, setTime] = useState('');

    let setTime;
    return (
        <div className={'col-sm-7 form'}>
            <Form setCity={setCity}/>
            <Weather city={city}/>
        </div>
    );
};

export default Data;