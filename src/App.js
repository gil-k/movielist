import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './MovieList.js';
import AddMovies from './AddMovies.js';
import MoviesWatchedList from './MoviesWatchedList.js';
import Search from './Search.js';
// import SearchMovieDB from './searchMovieDB.js';
const http = require('http');

class App extends Component {
  constructor(options) {
    super(options);
    this.state = {
      // movies: window.movieTitles,
      movies: [{id: 0, title: 'Cinderella', watched: false}, {id: 1, title: 'Speed', watched: false}, {id: 2, title: 'Spiderman', watched: false}, {id: 3, title: 'Tarzan', watched: false}, {id: 4, title: 'King Kong', watched: false}],
      movie: '',
      keyword: '',
      MovieListKey: 0,
      key: 0,
      filter: '',
      watched: false
    };
    // Search Component
    this.handleSearchInputClick = this.handleSearchInputClick.bind(this);

    // Add Movie Component
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);

    // Movie List Entry Component
    this.movieWatchedButtonClick = this.movieWatchedButtonClick.bind(this);

    // MoviesWatched Component
    this.handleWatchedListClick = this.handleWatchedListClick.bind(this);

    // this.handleMovieTitleClick = this.handleMovieTitleClick.bind(this);
  }

  handleAddMovieClick(value) {

    var movie = {id: this.state.movies.length, title:value, watched: false};
    console.log('added movie is ', movie);
    var updated = this.state.movies;

    updated.push(movie);

    this.setState({
      // movies: this.state.movies.concat(movie)
      movies: updated
    });
    // this.setState({ key: Math.random() });
    // );
    console.log('calling getMovieData');
    this.getMovieData();
  }

  getMovieData(){
    var movieTitle = '';

    var api_key = '06a4530000a0f10bbd79d66bc9d9decf';

    var options = {
      "method": "GET",
      "hostname": "api.themoviedb.org",
      "port": null,
      "path": "/3/search/movie?query=Contact&include_adult=false&page=1&language=en-US&api_key=" + api_key,
      "headers": {}
    };

    var getMovieData = http.request(options, function (res) {
      console.log('in getMovieData');
      var chunks = [];
      console.log(movieTitle);
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
      console.log('getMovieData completed');
    });
    getMovieData();
  }

  movieWatchedButtonClick(movie) {
    var updated = this.state.movies;
    updated[movie.id].watched = !updated[movie.id].watched;
    this.setState({
      movies: updated
    });
  }

  handleSearchInputClick(value) {
    this.setState({ filter: value });
  }

  handleWatchedListClick(watched){
    this.setState({
      watched: watched
    });
    this.setState({ MovieListKey: Math.random() });
  }

  // handleMovieTitleClick(){
  //   this.setState({ movieInfo: !this.state.movieInfo });
  // }

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
          <MoviesWatchedList handleWatchedListClick={this.handleWatchedListClick} />
          <Search handleSearchButtonClick={this.handleSearchInputClick} />
        </div>

        <MovieList
          movies={this.state.movies}
          filterString={this.state.filter}
          movieListKey={this.state.MovieListKey}
          watched={this.state.watched}

          handleMovieWatchedClick={this.movieWatchedButtonClick}
          // handleMovieTitleClick={this.handleMovieTitleClick}
           />
          }
      </div>
    );
  }
}

export default App;










