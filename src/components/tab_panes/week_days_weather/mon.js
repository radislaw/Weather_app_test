import React, { Component } from 'react';

export default class Mon extends Component{
  render() {
    return (
      <div className="weather-panel__cell weather-panel__cell--main">
        <div className="temp_date">
          <h2>82<span>°</span></h2>
          <date>Monday 27th</date>
        </div>
        <div className="icon_details">
          <div className="icon">
            <i className="wi-cloud weather-icon"></i>
          </div>
          <p>4mph / 67° </p>
        </div>
      </div>
    );
  }
};
