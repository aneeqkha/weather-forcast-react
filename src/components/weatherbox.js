import { Weatherdisplay } from "../Styling/Styling.js"

const Weatherbox=( {obj,key,onClick,className})=>{

return<Weatherdisplay key={key} onClick={onClick} className={className}>
    <p>{obj.check}</p>
    <img src={`https://openweathermap.org/img/wn/${obj.f}.png`} alt="Weather Icon" className="icon" />
    <p>{obj.a.toFixed(0)}&deg; {obj.b.toFixed(0)}&deg;</p>
    </Weatherdisplay>
}

export default Weatherbox