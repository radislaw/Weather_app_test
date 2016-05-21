import React, { Component } from 'react';
import Mon from './week_days_weather/mon';
import Tue from './week_days_weather/tue';
import Wed from './week_days_weather/wed';
import Thu from './week_days_weather/thu';
import Fri from './week_days_weather/fri';
import Sat from './week_days_weather/sat';
import Sun from './week_days_weather/sun';

export default class WeatherPane extends Component{
  render() {
    return (
        <div role="tabpanel" classNameName="tab-pane active" id="home">
          <div className="panel weather-panel">
            <Mon />
            <Tue />
            <Wed />
            <Thu />
            <Fri />
            <Sat />
            <Sun />
        </div>
      </div>
    );
  }
};
