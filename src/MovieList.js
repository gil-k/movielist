import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import MovieListEntry from './MovieListEntry.js';
// import searchMovieDB from './searchMovieDB.js';

class MovieList extends Component {
  constructor(options) {
    super(options);
    this.state = {
      movies: this.props.movies
    };
    // console.log('movies ', this.state.movies);
    this.handleMovieTitleClick = this.handleMovieTitleClick.bind(this);
  }

  handleMovieTitleClick(movie){

    // searchMovieDB.movieTitle = movie.title;

    // searchMovieDB.getMovieData();

    // console.log(movie.title);
  }

  render() {
    return (
        <fieldset>
        {
          this.state.movies.filter (movie => movie.title.includes(this.props.filterString) && movie.watched === this.props.watched)
          .map (movie =>

            <MovieListEntry
              movie={movie}
              key={movie.id}

              handleMovieWatchedClick={this.props.handleMovieWatchedClick}

              handleMovieTitleClick={this.handleMovieTitleClick}

              bgColor = {movie.watched ? 'green' : 'white'} />
          )
        }
        </fieldset>
    );
  }
}

export default MovieList;
