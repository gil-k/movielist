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

        <fieldset>

        {
          this.state.movies.filter (movie => movie.title.includes(this.props.filterString) && movie.watched === this.props.watched)
          .map (movie => <MovieListEntry movie={movie} key={movie.id}

          handleMovieListEntryClick={this.props.handleMovieListEntryClick}
          bgColor = {movie.watched ? 'green' : 'white'}/>)
        }
        </fieldset>

    );
  }
}

export default MovieList;
