import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Test from './Test'
import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
  icon: 'CLOUDY',
  color: 'black',
  size: 50,
  animate: true
};
 
function App() {
  const [weather, setWeather] = useState([]);
  const [visible, setVisible] = useState(false);
  
  let test = (value) => {
    alert(value);
  }

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c0d573b18729da9019711dcbacf8458d&units=metric')
    .then(res => {
      setWeather(res.data);
      setVisible(true);
      console.log(weather);
    })
  }, []);
  return (
    <div className="card col-4 mx-auto my-5 bg-image">
    <div className="card-body">
      <h5 className="card-title text-white">{visible && weather.name}</h5>
      <Test country="IN" fun={test}/>
      {/* <ReactAnimatedWeather icon={defaults.icon} color={defaults.color} size={defaults.size} animate={defaults.animate}/> */}
      <h1 className="text-white">{visible && weather.main.temp}°C</h1>
    </div>
  </div>
  );
}
export default App;