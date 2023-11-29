 export const getWeather=(city)=>{
    return (fetch(`https://api.weatherapi.com/v1/current.json?key=9f0bb713e23141798e555117230311&q=${city}&aqi=no`))
    .then((res)=>res.json())
    
}