import React from "react";
import "./main.css";
import Titles from "./components/titles.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";
import Card from "./components/card.js";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    error: undefined,
    id: undefined
  };

  getWeather = async e => {
    // prevents reload of entire page
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_key = "0c9ef0173dda4782d86ffe817421823e"; // Steal my API_KEY #yolo
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    );

    const response = await api_call.json();

    if (city) {
      this.setState({
        temperature: Math.round(response.main.temp - 273.15),
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].main,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter a value"
      });
    }

    console.log(response);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Card>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />
        </Card>
      </div>
    );
  }
}
export default App;
