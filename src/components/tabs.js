import React, { Component } from 'react';
import GaleryTab from './tabs/galery_tab';
import WeatherTab from './tabs/weather_tab';
import NewsTab from './tabs/news_tab';

import TabPanes from './tab_panes';

class Tabs extends Component{
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <WeatherTab />
          <NewsTab />
          <GaleryTab />
        </ul>
        <TabPanes />
      </div>
    );
  }
};

export default Tabs;
