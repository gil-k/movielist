import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MovieListEntry from './MovieListEntry.js';

class MovieList extends Component {
  constructor(options) {
    super(options);
    this.state = {
      movies: this.props.movies
    };
    // console.log('movies ', this.state.movies);
  }
  render() {
    return (
      <div className="App" width="50%">
        <fieldset  class="fieldset-auto-width">
        <header className="">
        </header>
        <p className="App-intro"></p>

        {this.state.movies.map((movie) =>
          <MovieListEntry movie={movie}/>
        )}
        </fieldset>
      </div>
    );
  }
}

export default MovieList;
