import React, { Component } from 'react';

export default class GaleryTab extends Component{
  render() {
    return (
        <li role="presentation" className="galery_tab"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Galery</a></li>
    );
  }
};
