import React from 'react';
// import logo from './logo.svg';
import './App.css';

class MovieListEntry extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="fieldset-auto-width">{this.props.movie.title}</div>
      </div>
    );
  }
}

export default MovieListEntry;
