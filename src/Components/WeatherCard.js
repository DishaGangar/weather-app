import React from "react";

const WeatherCard = (props) => {
  
  return (
    <div className="card">
        {
            props.Data ?
            <>
           
            <h2>{props.Data.location.name?props.Data.location.name:''}</h2>
      <div >
      <img src={props.Data.current.condition.icon? props.Data.current.condition.icon : ""} alt="icon" />
      <span className="current-temp">{props.Data.current.temp_c?props.Data.current.temp_c:''} °C</span></div>
      <div className="condition">{props.Data.current.condition.text?props.Data.current.condition.text:''}
        </div>
     
          <div className="coordinates">
            Latitude: {props.Data.location.lat ? props.Data.location.lat : ''}  |  Longitude: {props.Data.location.lon ? props.Data.location.lon : ''}
          </div>
          <div className="humidity">
            Humidity: {props.Data.current.humidity ? props.Data.current.humidity : ''}%
          </div>
      </>
      :<p className="error-msg text-center m-auto ">No Data Available for current location</p>
      
      
        }
      
    </div>
  );
};

export default WeatherCard;
