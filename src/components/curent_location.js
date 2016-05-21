import React, { Component } from 'react';
import Clock from './time';

class CurentLocation extends Component {
  render() {
    return (
      <div className="col-md-4 col-md-offset-4 text-right">
        <i className="wi-location location_icon"></i>
        <p className="card__meta">Vladivostok, Russia</p>
        <Clock />
      </div>
    );
  }
}


export default CurentLocation;
