import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';

class App extends Component {
  constructor(options) {
    super(options);
    this.state = {
      movies: window.movieTitles
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>

        <p className="App-intro"><code></code></p>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;

