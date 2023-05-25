import {  useEffect,useState } from "react"
import '../Styling/reset.css'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { B1,B2 } from "../components/buttoncss";
import { Line } from 'react-chartjs-2';
import { Container,Header,Search,Searchby, Searchoption,InputField,
         Submit,Weathercontainer,Infocity,Blockweather,Weatherdisplay,
         Horizental,Currenticon,Divtemp,InfoTemp,Graph,Div } from "../Styling/Styling"
import Chart from "chart.js/auto";

const city={
    cityname:'',
    countryname:'',
}

const day={
    day:'',
    prediction:''
}



const Weather=()=>{

const [searchvalue,setsearchvalue]=useState('')
const [place,setplace]=useState('')
const [infocity,Setcity]=useState(city)
const [dayinfo,setday]=useState(day)
const [Toshow,setToshow]=useState({})
const apiKey = '371a9c0aefe98fd52c39cd3e1a671337'; 
const [start,setstart]=useState()
const [selectdata,setselectdata]=useState(null)
const [data,setdata]=useState(false)
const [time,Settime]=useState()
const [temperature,Settemperature]=useState()
const [state,setstate]=useState(false)
const [activeIndex, setActiveIndex] = useState(null);



let isExecuted0 = false;
let isExecuted1 = false;
let isExecuted2 = false;
let isExecuted3 = false;
let isExecuted4 = false;
let isExecuted5 = false;
let isExecuted6 = false;



  


const handlechange=(e)=>{
    setsearchvalue(e.target.value)  
}

const handlechange1=(e)=>{
    setplace(e.target.value)
}


useEffect(()=>{
  
})


const Submited=async(e)=>{
    e.preventDefault()

   let apiUrl
    if(searchvalue==="City name"){
        
         apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=${apiKey}`;
    }

    if(searchvalue==="City id"){
       console.log("start")

      apiUrl `http://api.openweathermap.org/data/2.5/forecast?id=${place}&appid=${apiKey}`
    }

    if(searchvalue==="City zip"){
        console.log("start")
 
         apiUrl=`http://api.openweathermap.org/data/2.5/forecast?id=${place}&units=metric&appid=${apiKey}`
     }
       await axios.get(apiUrl)
        .then(response => {
    
            console.log(response)

            Setcity({   cityname:response.data.city.name,
                        countryname:response.data.city.country})

               let count=0;
     setstart(response.data.list.map((item,index)=>{
                

                console.log('date=>>',item.dt_txt)

                const dateString=item.dt_txt.split(" ")[0]
                const date = new Date(dateString);
                const dayOfWeek = date.getDay();
                const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const dayName = daysOfWeek[dayOfWeek];

                if(index===0){  
                    setday({day:dayName,prediction:item.weather[0].main})
                    console.log(dayinfo)
                }
                console.log("Day of the week:", dayName);

            if(dayName==="Monday"){
              if(!isExecuted0){
                count++
                if(count===6){
                    count=null;
                }
                console.log(index)
                isExecuted0=true
                return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
              }
              return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}

            }

            if(dayName==="Tuesday"){
                if(!isExecuted1){
                    count++
                if(count===6){
                    count=null;
                }
                    console.log(index)
                    isExecuted1=true
                    return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                        d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
                  }
                  return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}

            }
            if(dayName==="Wednesday"){
              
                if(!isExecuted2){
                    count++
                if(count===6){
                    count=null;
                }
                    console.log(index)
                    isExecuted2=true
                    return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                        d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
                  }
                  return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
            }
            if(dayName==="Thursday"){
              
                if(!isExecuted3){
                    count++
                if(count===6){
                    count=null;
                }
                    console.log(index)
                    isExecuted3=true
                    return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                           d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
                    
                  }
                  return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
            }
            if(dayName==="Friday"){
                if(!isExecuted4){
                    count++
                if(count===6){
                    count=null;
                }
                    console.log(index)
                    isExecuted4=true
                    return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                        d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
                  }
                  return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}

            }
            if(dayName==="Saturday"){
                if(!isExecuted5){
                    count++
                if(count===6){
                    count=null;
                }
                    console.log(index)
                    isExecuted5=true
                    return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                        d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
                  }
                  return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}

            }
            if(dayName==="Sunday"){
                if(!isExecuted6){
                    count++
                if(count===6){
                    count=null;
                }
                    console.log(index)
                    isExecuted6=true
                    return{valid:count,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                        d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}
                  }
                  return{valid:null,time:item.dt_txt.split(" ")[1],check:dayName,a:item.main.temp_max,b:item.main.temp_min,c:item.main.pressure,
                    d:item.main.humidity,e:item.wind.speed,f:item.weather[0].icon}

            }
            
        
        })
     )      
          }).catch(error => {
            console.error('Error:', error);
          });

}

const addvalues=(index)=>{
    
const day=start[index].check

const temperatureData = start.map((data) => {
    if(data.check===day){
        return data.a
    }
    return null
})
const temp =temperatureData.filter((data)=>data!==null)

Settemperature(temp) 
console.log(temperature)

const TimeData = start.map((data) => {
    if(data.check===day){
        return data.time
    }
    return null
})
const temp1 =TimeData.filter((data)=>data!==null)

Settime(temp1) 
console.log(time)
setstate(true)
}

const Setstate=(index)=>{

    
    console.log(start)
    setdata(false)
    if(data){
        B1()
    }
    setselectdata(index)
    console.log(selectdata)
    addvalues(index)
    setActiveIndex(index);
}

const checked=()=>{
   B2()
   setdata(true)
   const x=start[selectdata].a.toFixed(0)
   console.log("clicked")
   setToshow(((x * 9/5)+ 32 ).toFixed(0))
}

const check=()=>{
B1()
setdata(false)
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



return<Container>
    
    <Header>
        <p>Weather Forcast (5 DAYS)</p>
    </Header>
        
<Search method="post" onSubmit={Submited}>

    <Searchby  value={searchvalue} onChange={handlechange}>
        <Searchoption>Select value</Searchoption>
        <Searchoption value='City name'>City name</Searchoption> 
        <Searchoption value='City id'>City id</Searchoption> 
        <Searchoption value='City zip'>City zip</Searchoption>    
    </Searchby>

    <InputField value={place} onChange={handlechange1}>
       
    </InputField>  

    <Submit type="submit">
    <FontAwesomeIcon icon={faSearch} />
    </Submit> 
</Search>
{start &&
<Weathercontainer >
<Infocity>
    <h1>{infocity.cityname},{infocity.countryname}</h1>
    <h4>{dayinfo.day}</h4>
    <h4>{dayinfo.prediction}</h4>  
</Infocity>

   
   
   {selectdata!== null && (

        <Blockweather>
        <Currenticon src={`https://openweathermap.org/img/wn/${start[selectdata].f}.png`} alt="Weather Icon" />
        <Divtemp>
        <h1>{data?`${Toshow}`:`${start[selectdata].a.toFixed(0)}`} </h1>
        <button id="add" onClick={()=>check()}> <p>&deg;</p>C</button>
        <p>|</p>
        <button id="add1" onClick={()=>{checked()}}><p>&deg;</p>F</button>
        </Divtemp>
        <InfoTemp>
            <p>Pressure:{`${start[selectdata].c.toFixed(0)}nPa`}</p>
            <p>Humidity: {`${start[selectdata].d.toFixed(0)}%`}</p>
            <p>Wind Speed: {`${start[selectdata].e.toFixed(0)}m/s`}</p> 
        </InfoTemp>
        </Blockweather>
        )}
   
   <Horizental>
   {start && start.map((obj, index) => (
  <Div>
    {obj.valid && (
    <Weatherdisplay
    key={index}          
    className={`${activeIndex === index ? 'active' : ''}`}
    onClick={()=>Setstate(index)}>

        <p>{obj.check}</p>
        <img src={`https://openweathermap.org/img/wn/${obj.f}.png`} alt="Weather Icon" className="icon" />
        <p>{obj.a.toFixed(0)}&deg; {obj.b.toFixed(0)}&deg;</p>
    </Weatherdisplay>
    )}
  </Div>
))}
  </Horizental>
  <Graph>
  {state && <Line data={chartData} options={chartOptions}/>}
  </Graph>
</Weathercontainer>}


    </Container>
}


export default Weather