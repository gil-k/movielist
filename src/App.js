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
      movies: [{title: 'La Cage Aux Folles', watched: false},
              {title: 'Space Invaders', watched: false},
              {title: 'Dracula', watched: false},
              {title: 'Sound of Music', watched: false}],

      filter: {watched: false, towatch: true, query: ''},
      key: 0
    };

    this.handleSearchInputClick = this.handleSearchInputClick.bind(this);

    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
  }

  handleAddMovieClick(value) {
    this.setState({
      movies: this.state.movies.concat({title:value, watched: false})
    });
    this.setState({ key: Math.random() });
  }

  handleSearchInputClick(filter) {
    this.setState({
      filter: filter
   });
  }

  handleMovieListEntryClick(title) {

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


        <MovieList key={this.state.key}  movies={this.state.movies} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;

