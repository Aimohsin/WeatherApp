import React, { Component } from 'react';

// Pictures were not directly and easily calling in img tag, this is why I import them here first
import AddSymbol from './assets/img/Add-Symbol.png';
import CloudCurve from './assets/img/Cloud-Curve.png';
import CityImage from './assets/img/City-Image.png';
import Down from './assets/img/Down.png';
import axios from 'axios';
import apiKeys from './apiKeys';

// CSS
import './App.css';
import './assets/css/homepage.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: ''
    }
  }

  componentDidMount() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${`Karachi`}&appid=${apiKeys.key}&units=metric`)
      .then((res) => {
        console.log('res', res)
        this.setState({
          weather: res.data.main
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <div class="form-container">
          <form action="" id="form">
            <class class="container">
              <h2>Karachi</h2>
              <img src={CloudCurve} alt="" class="image-styling" />
              <img src={Down} alt="" class="image-styling" />
              <div class="further-temp">
                <h1>{this.state.weather.temp}<span>&#176;</span></h1>
                <h3>HAZE</h3>
              </div>
              <div class="flex-container">
                <div class="temperature" style={{ marginRight: '50px', marginTop: '-20px' }}>
                  <h2>{this.state.weather.temp_min}</h2>
                  <h4 style={{ color: 'green' }}>Min</h4>
                </div>
                <div class="temperature" style={{ marginTop: '-20px' }}>
                  <h2>{this.state.weather.temp_max}</h2>
                  <h4 style={{ color: 'red' }}>Max</h4>
                </div>
              </div>
            </class>
          </form>
          <form action="" id="form">
            <class class="container">
              <h2>Add City</h2>
              <div class="form-data">
                <img src={AddSymbol} alt="" class="image-styling" />
                <img src={CityImage} alt="" class="image-city" height="250px" width="400px" />
              </div>
            </class>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
