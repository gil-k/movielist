import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './MovieList.js';
import Search from './Search.js';

class App extends Component {
  constructor(options) {
    super(options);
    this.state = {
      movies: window.movieTitles,
      movie: '',
      keyword: '',
      filter: ''
    };
    this.handleSearchInputClick = this.handleSearchInputClick.bind(this);
  }

  handleSearchInputClick(value) {
    // alert(value);
    this.setState({ filter: value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>
        <p className="App-intro"><code></code></p>

        <Search handleSearchButtonClick={this.handleSearchInputClick} />

        <MovieList movies={this.state.movies} filterString={this.state.filter}/>
      </div>
    );
  }
}

export default App;

