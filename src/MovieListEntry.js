import React from 'react';
// import logo from './logo.svg';
import './App.css';

class MovieListEntry extends React.Component {
  render() {
    return (
      <div className="App">
        <header><fieldset className="fieldset-auto-width">{this.props.movie.title}
        </fieldset></header>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default MovieListEntry;
