import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './MovieList.js';
import AddMovies from './AddMovies.js';
import MoviesWatchedList from './MoviesWatchedList.js';
import Search from './Search.js';

class App extends Component {
  constructor(options) {
    super(options);
    this.state = {
      // movies: window.movieTitles,
      movies: [{id: 0, title: 'Cinderella', watched: false}, {id: 1, title: 'Speed', watched: false}, {id: 2, title: 'Spiderman', watched: false}, {id: 3, title: 'Tarzan', watched: false}, {id: 4, title: 'King Kong', watched: false}],
      movie: '',
      keyword: '',
      filter: ''
    };
    this.handleSearchInputClick = this.handleSearchInputClick.bind(this);
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
    this.movieListEntryClick = this.movieListEntryClick.bind(this);
  }

  handleAddMovieClick(value) {
    this.setState({
      movies: this.state.movies.concat({title:value})
    });
    this.setState({ key: Math.random() });
  }

  movieListEntryClick(movie) {
    var updated = this.state.movies;
    updated[movie.id].watched = !updated[movie.id].watched;
    this.setState({
      movies: updated
    });
  }

  handleSearchInputClick(value) {
    this.setState({ filter: value });
  }

  render() {
    return (
      <div  className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>
        <p className="App-intro"><code></code></p>

        <AddMovies handleAddButtonClick={this.handleAddMovieClick} />

        <div>
        <MoviesWatchedList />

        <Search handleSearchButtonClick={this.handleSearchInputClick} />
        </div>

        <MovieList movies={this.state.movies} filterString={this.state.filter} handleMovieListEntryClick={this.movieListEntryClick}/>
      </div>
    );
  }
}

export default App;

