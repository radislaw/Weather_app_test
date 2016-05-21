import React, { Component } from 'react';

export default class Fri extends Component{
  render() {
    return (
      <div className="weather-panel__cell">
        <date>FRI</date>
          <i className="wi wi-rain weather-icon"></i>
        <p>55°</p>
      </div>
    );
  }
};
