import React, { useState } from 'react';
import "../Styles/LogStyle.css";
import Logo from "../assets/logo.png";
  const api={
    baseUrl:"https://api.openweathermap.org/data/2.5/", 
    apiKey:"6412aa5d72ffbd58b1de8c69c83553f1"
  }
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const Log = () => {
    const [city, setCity]=useState('');
    const [result, setResult]=useState({});

    const fxn=(e)=>{  
         if(e.key === "Enter"){
            // console.log("Key Pressed")
            console.log(city);
   fetch(`${api.baseUrl}weather?q=${city}&units=metric&appid=${api.apiKey}`)
   .then(res => res.json())
   .then(data => {
    console.log(data);
    setResult(data);
   }  )
   setCity(" ");
       
         }
    }


  return (
    <div className='Main'>
        <div>
            <h1><center>Check Current Weather</center> </h1>
            <img src={Logo} alt="" className='image'/>
            <div className='data'>
                <input type="text" 
                placeholder='Enter City Name' 
                value={city} 
                onChange={(e)=>setCity(e.target.value)}
                 onKeyPress={fxn}/>
                 <br />
            </div>

            { ( typeof result.sys != "undefined")? (
                <div className='result'>
                   <div>
                 <span style={{fontSize:"25px" , fontWeight:"bolder", color:'darkblue'}}>City :</span>  {result.name} , {result.sys.country}
               </div>
               <div><span style={{fontSize:"25px" , fontWeight:"bolder", color:'darkblue'}}>Temprature :</span>{result.main.temp}°C</div>
                <div> <span style={{fontSize:"25px" , fontWeight:"bolder", color:'darkblue'}}>Weather :</span>{result.weather[0].description}</div>
               </div>
                
            ):(" ") }
           
        </div>
    </div>
  )
}

export default Log;
