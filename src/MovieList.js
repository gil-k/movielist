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
      <div width="50%">
        <fieldset  className="fieldset-auto-width">
        <header className="">
        </header>
        <p className="App-intro"></p>

        {
          this.state.movies.filter (movie => movie.title.includes(this.props.filterString))
          .map (movie => <MovieListEntry movie={movie} key={movie.title}/>)
        }
        </fieldset>
      </div>
    );
  }
}

export default MovieList;
