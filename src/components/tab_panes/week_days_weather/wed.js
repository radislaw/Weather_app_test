import React, { Component } from 'react';

export default class Wed extends Component{
  render() {
    return (
      <div className="weather-panel__cell">
        <date>WED</date>
          <i className="wi-day-sunny weather-icon"></i>
          <p>52°</p>
      </div>
    );
  }
};
