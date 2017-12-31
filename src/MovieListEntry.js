import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class MovieListEntry extends Component {
  render() {
    return (
      <div className="App">
        <header><fieldset>{this.props.movie.title}
        </fieldset></header>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default MovieListEntry;
