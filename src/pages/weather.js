import {useState } from "react"
import '../Styling/reset.css'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import dayjs from "dayjs";
import 'dayjs/locale/en';
import 'dayjs/plugin/weekday';
import Weatherbox from "../components/weatherbox";
import {
    Container, Header, Search, Searchby, Searchoption, InputField,
    Submit, Weathercontainer, Infocity, Blockweather,
    Horizental, Currenticon, Divtemp, InfoTemp, Graph, Div
} from "../Styling/Styling"


const city = {
    cityname: '',
    countryname: '',
}

const day = {
    day: '',
    prediction: ''
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false,
        },
        y: {
            beginAtZero: false,
            ticks: {
                callback: function (value) {
                    return value + '°C';
                },
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
    elements: {
        line: {
            tension: 0.2,
        },
    },
};



const Weather = () => {

    const apiKey = '371a9c0aefe98fd52c39cd3e1a671337';
    const [searchvalue, setsearchvalue] = useState('')
    const [location, setLocation] = useState('')
    const [infocity, setCityinfo] = useState(city)
    const [dayinfo, setDay] = useState(day)
    const [faranheit, setFahrenheit] = useState({})
    const [weakinfo, setWeakinfo] = useState()
    const [showTemp, setTempshow] = useState(false)
    const [time, setTime] = useState()
    const [temperature, setTemperature] = useState()
    const [graphstate, setGraphstate] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const [tempunderline, setTempunderline] = useState(false)
    const [click_update, setClick_update] = useState(null)
    let apiUrl






    const handlechange = (e) => {
        setsearchvalue(e.target.value)
    }

    const handlechange1 = (e) => {
        setLocation(e.target.value)
    }


    const Submited = async (e) => {
        e.preventDefault()


        if (searchvalue === "City name") {

            apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

            await fetchdata()




        }

        if (searchvalue === "City id") {
            console.log("start")

            apiUrl`http://api.openweathermap.org/data/2.5/forecast?id=${location}&appid=${apiKey}`


        }

        if (searchvalue === "City zip") {
            console.log("start")


            apiUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${location}&units=metric&appid=${apiKey}`


        }

    }



const fetchdata = async () => {

        axios.get(apiUrl)
            .then(response => {

                console.log(response)

                setCityinfo({
                    cityname: response.data.city.name,
                    countryname: response.data.city.country
                })


                const store = response.data.list.map((item, index) => {


                    console.log('date=>>', item.dt_txt)

                    const time = item.dt_txt.split(" ")[1]
                    const date1 = dayjs(item.dt_txt.split(" ")[0]);
                    const dayOfWeek = date1.locale('en').format('dddd');
                    console.log(">>>>>>>>", dayOfWeek);

                    if (index === 0) {
                        setDay({ day: dayOfWeek, prediction: item.weather[0].main })
                        console.log(dayinfo)
                    }
                    console.log("Day of the week:", dayOfWeek);



                    return {
                        time: time, check: dayOfWeek, a: item.main.temp_max, b: item.main.temp_min, c: item.main.pressure,
                        d: item.main.humidity, e: item.wind.speed, f: item.weather[0].icon
                    }



                })
                const dayData = []

                store.forEach((data) => {
                    const existingArray = dayData.find((arr) => arr[0].check === data.check);
                    if (existingArray) {
                        existingArray.push(data);
                    } else {
                        dayData.push([data]);
                    }
                });
                console.log(dayData)

                setWeakinfo(dayData)

            }).catch(error => {
                console.error('Error:', error);
            });

    }

    const Setstate = (index) => {

        setTempshow(false)
        setTempunderline(false)
        setActiveIndex(index);

        const data = []
        weakinfo.map((item, indexno) => {
            
            indexno === index && (item.map((inneritem, inindex) => {
                data.push(inneritem)
            }))
        })
        const temperatureData = data.map((maxtemp) => {
            return maxtemp.a;
        });

        const TimeData = data.map((timedata) => {
            return timedata.time;
        });


        setTime(TimeData)
        setTemperature(temperatureData)
        setClick_update(data[0])
        setGraphstate(true)

    }

    const convertF = () => {
        setTempunderline(true)
        setTempshow(true)
        const x = click_update.a.toFixed(0)
        setFahrenheit(((x * 9 / 5) + 32).toFixed(0))
    }

    const convertC = () => {
        setTempshow(false)
        setTempunderline(false)
    }

    const chartData = {
        labels: time,
        datasets: [
            {
                label: 'Temperature',
                data: temperature,
                fill: 'origin',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };


    return <Container>

        <Header>
            <p>Weather Forcast (5 DAYS)</p>
        </Header>

        <Search method="post" onSubmit={Submited}>

            <Searchby value={searchvalue} onChange={handlechange}>
                <Searchoption>Select value</Searchoption>
                <Searchoption value='City name'>City name</Searchoption>
                <Searchoption value='City id'>City id</Searchoption>
                <Searchoption value='City zip'>City zip</Searchoption>
            </Searchby>

            <InputField value={location} onChange={handlechange1}>

            </InputField>

            <Submit type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </Submit>
        </Search>
        {weakinfo &&
            <Weathercontainer >
                <Infocity>
                    <h1>{infocity.cityname},{infocity.countryname}</h1>
                    <h4>{graphstate ? click_update.check : dayinfo.day}</h4>
                    <h4>{dayinfo.prediction}</h4>
                </Infocity>



                {click_update !== null && (

                    <Blockweather>
                        <Currenticon src={`https://openweathermap.org/img/wn/${click_update.f}.png`} alt="Weather Icon" />
                        <Divtemp>
                            <h1>{showTemp ? `${faranheit}` : `${click_update.a.toFixed(0)}`} </h1>
                            <button className={tempunderline ? '' : 'active'} id="add" onClick={() => convertC()}> <p>&deg;</p>C</button>
                            <p>|</p>
                            <button className={tempunderline ? 'active' : ''} id="add1" onClick={() => { convertF() }}><p>&deg;</p>F</button>
                        </Divtemp>
                        <InfoTemp>
                            <p>Pressure:{`${click_update.c.toFixed(0)}nPa`}</p>
                            <p>Humidity: {`${click_update.d.toFixed(0)}%`}</p>
                            <p>Wind Speed: {`${click_update.e.toFixed(0)}m/s`}</p>
                        </InfoTemp>
                    </Blockweather>

                )}

                <Horizental>
                    {weakinfo.map((dataGroup, index) => (
                        index < 5 && (
                            <div key={index}
                                className={`${activeIndex === index ? 'active' : ''}`}
                                onClick={() => Setstate(index)}
                            >
                                {dataGroup.map((data, subIndex) => (
                                    <Div key={subIndex}>
                                        {subIndex === 0 && (
                                            <Weatherbox
                                                key={subIndex}
                                                obj={data} />
                                        )}
                                    </Div>
                                ))}
                            </div>
                        )
                    ))}
                </Horizental>

                <Graph>
                    {graphstate && <Line data={chartData} options={chartOptions} />}
                </Graph>
            </Weathercontainer>}


    </Container>
}


export default Weather