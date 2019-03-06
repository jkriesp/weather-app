import React from 'react';
import Titles from './components/titles.js';
import Form from './components/form.js';
import Weather from './components/weather.js';

  class App extends React.Component {
   render() {
    return (
     <div>
        <Titles />
        <Form loadWeather = {this.getWeather} />
        <Weather />
     </div>
    ) 
  }
  getWeather = async (e) => {
    e.preventDefault();
    const api_key = "0c9ef0173dda4782d86ffe817421823e"; // Steal my API_KEY #yolo
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Trondheim&appid=${api_key}`);
    
    const response = await api_call.json();
    
    console.log(response);
    
  }
}
export default App;