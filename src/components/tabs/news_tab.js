import React, { Component } from 'react';

export default class NewsTab extends Component{
  render() {
    return (
        <li role="presentation" className="news_tab text-uppercase"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i className="wi-paper_plane"></i> News & Events</a></li>
    );
  }
};
