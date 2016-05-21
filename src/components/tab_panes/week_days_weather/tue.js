import React, { Component } from 'react';

export default class Tue extends Component{
  render() {
    return (
      <div className="weather-panel__cell">
        <date>TUE</date>
          <i className="wi-cloud weather-icon"></i>
          <p>60°</p>
      </div>
    );
  }
};
