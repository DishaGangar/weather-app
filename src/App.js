import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchCity from './Components/SearchCity';
import WeatherCard from './Components/WeatherCard';
import { getWeather } from './Utils/WeatherApi';

function App() {
  const [city, setCity]=useState('');
     const [Data, setData]=useState(null)

     const handleclick=()=>{
      if(!city){
        alert("Please enter a city name")
      } else {
        getWeather(city).then((res)=>{
        if(res.error?.code === 1006){
          setData(null)
        } else {
          setData(res)
          console.log(Data)
          setCity('')
        }
          
        })
        
      }
      
   }

  return (
    <>
    <SearchCity
    city={city}
    setCity={setCity}
    Data={Data}
    handleclick={handleclick}
    />
    <WeatherCard
    Data={Data}
    />
    </>
  )
}

export default App;
