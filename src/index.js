import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import CurentLocation from './components/curent_location';
import Tabs from './components/tabs';



const App = () => {
  return (
      <div>
        <div className='jumbotron'>
          <SearchBar />
          <CurentLocation />
        </div>
        <Tabs />
      </div>

  );
}

ReactDOM.render(
    <App />, document.querySelector('.container')
);
