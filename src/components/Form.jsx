const Form = ({setCity,setTime}) => {

    const handleClickGetWeather = e => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        setCity(city);
        const time = Date.now();
        setTime(time);
        // setCity(new String(city));
        e.target.city.value = '';
    }

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;