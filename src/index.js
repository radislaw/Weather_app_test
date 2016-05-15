import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import CurentTime from './components/time';

const App = () => {
  return (
    <div className='card'>
      <div className='card__top'>
        <div className='card__intro'>
          <SearchBar />
          <CurentTime />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
    <App />, document.querySelector('.container')
);
