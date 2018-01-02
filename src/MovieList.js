import React, { Component } from 'react';

import MovieListEntry from './MovieListEntry.js';

class MovieList extends Component {
  constructor(options) {
    super(options);
    this.state = {
      movies: this.props.movies,
      filter: this.props.filter
    };
  }

  render() {
    return (

        <fieldset>

        {
          this.state.movies.filter (movie =>

          (
            (!this.props.filter.query && !this.props.filter.watched && !this.props.filter.towatch) ||

            (this.props.filter.query && movie.title.includes(this.props.filter.query)) ||

            (this.props.filter.watched && this.props.filter.watched === movie.watched) ||

            (this.props.filter.towatch && this.props.filter.towatch !== movie.watched)

          ))
          .map (movie => <MovieListEntry movie={movie} key={movie.title} movieListEntryClick={this.props.movieListEntryClick} />)
        }

        </fieldset>
    );
  }
}

export default MovieList;
