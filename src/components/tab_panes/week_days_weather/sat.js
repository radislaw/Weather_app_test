import React, { Component } from 'react';

export default class Sat extends Component{
  render() {
    return (
      <div className="weather-panel__cell">
        <date>SAT</date>
        <i className="wi wi-snowflake-cold weather-icon"></i>
        <p>62°</p>
      </div>
    );
  }
};
