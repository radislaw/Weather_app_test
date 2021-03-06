import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

  this.state = { term: '' };
}

  render() {
    return (
      <div className="col-md-4">
        <input className="input_search" placeholder = "Enter Location"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}


export default SearchBar;
