import React, { Component } from 'react';

export default class WeatherPane extends Component{
  render() {
    return (
        <div role="tabpanel" classNameName="tab-pane active" id="home">




      <div className="panel weather-panel">
      <div className="weather-panel__cell weather-panel__cell--main">
        <div className="temp_date">
          <h2>82<span>°</span></h2>
          <date>Monday 27th</date>
        </div>
        <div className="icon_details">
          <div className="icon">
            <i className="wi-cloud"></i>
          </div>
          <p>4mph / 67° </p>
        </div>
      </div>
      <div className="weather-panel__cell">
        <date>TUE</date>
          <i className="wi-cloud"></i>
        <p>60°</p>
      </div>
      <div className="weather-panel__cell">
        <date>WED</date>
          <i className="wi wi-day-sunny weather-icon"></i>
        <p>52°</p>
      </div>
      <div className="weather-panel__cell">
        <date>THURS</date>
          <i className="wi wi-cloud weather-icon"></i>
        <p>83°</p>
      </div>
      <div className="weather-panel__cell">
        <date>FRI</date>
          <i className="wi wi-rain weather-icon"></i>
        <p>55°</p>
      </div>
      <div className="weather-panel__cell">
        <date>SAT</date>
        <i className="wi wi-snowflake-cold weather-icon"></i>
        <p>62°</p>
      </div>
      <div className="weather-panel__cell">
        <date>SUN</date>
          <i className="wi wi-cloud weather-icon"></i>
        <p>74°</p>
      </div>
    </div>






      </div>
    );
  }
};
