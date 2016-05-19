import React, { Component } from 'react';

export default class NewsTab extends Component{
  render() {
    return (
        <li role="presentation" className="news_tab"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">News & Events</a></li>
    );
  }
};
