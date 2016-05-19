import React, { Component } from 'react';

export default class WeatherTab extends Component{
  render() {
    return (
        <li role="presentation" className="active weather_tab"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Weather</a></li>
    );
  }
};
