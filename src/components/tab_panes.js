import React, { Component } from 'react';
import GaleryPane from './tab_panes/galery_pane';
import WeatherPane from './tab_panes/weather_pane';
import NewsPane from './tab_panes/news_pane';

export default class TabPanes extends Component{
  render() {
    return (
      <div className='tab-content card__bottom'>
        <WeatherPane />
        <NewsPane />
        <GaleryPane />
      </div>
    );
  }
};
