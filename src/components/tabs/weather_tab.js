import React, { Component } from 'react';

export default class WeatherTab extends Component{
  render() {
    return (
        <li role="presentation" className="active weather_tab text-uppercase"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i className="wi-day-sunny"></i> Weather</a></li>
    );
  }
};
