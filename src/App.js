import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './MovieList.js';
import AddMovies from './AddMovies.js';
import Search from './Search.js';

class App extends Component {
  constructor(options) {
    super(options);
    this.state = {
      // movies: window.movieTitles,
      movies: [{title: 'h'}],
      movie: '',
      keyword: '',
      filter: '',
      key: 0
    };
    this.handleSearchInputClick = this.handleSearchInputClick.bind(this);
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
  }

  handleAddMovieClick(value) {
    // var updated = this.state.movies.concat({title: value});
    this.setState({
      // key: 0,
      movies: this.state.movies.concat({title:value})
      // movies: [...this.state.movies, {title:value}]
      // movies: updated
    });
    this.setState({ key: Math.random() });
    // this.forceUpdate();
    // alert(this.state.movies);
  }

  handleSearchInputClick(value) {
    // alert(value);
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

        <Search handleSearchButtonClick={this.handleSearchInputClick} />

        <MovieList key={this.state.key}  movies={this.state.movies} filterString={this.state.filter}/>
      </div>
    );
  }
}

export default App;

