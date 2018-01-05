import React from 'react';
// import logo from './logo.svg';
import MovieInfo from './MovieInfo.js';
import './App.css';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false,
      bgColor: 'lightseagreen',
      info: ''
      // title: this.props.movie.title,
      // watched: this.props.movie.watched,
      // bgColor: (this.props.movie.watched ? 'green' : 'white')
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(){
    this.setState({
      showPanel: !this.state.showPanel
    },
    this.props.handleMovieTitleClick(this.props.movie)
    );
  }

  render() {
    if (this.state.showPanel) {
      return (
        <div>
          <div>
            <h3 onClick={this.handleTitleClick} style={{backgroundColor:this.state.bgColor}} >{this.props.movie.title}</h3>

              <button
                onClick={() => this.props.handleMovieWatchedClick(this.props.movie)}

                style={{backgroundColor:this.props.bgColor}} >Watched</button>

          </div>
          <MovieInfo />
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h3 onClick={this.handleTitleClick} style={{backgroundColor:this.state.bgColor}}>{this.props.movie.title}</h3>

              <button
                onClick={() => this.props.handleMovieWatchedClick(this.props.movie)}

                style={{backgroundColor:this.props.bgColor}} >Watched</button>

          </div>
        </div>
      );
    }
  }
}

export default MovieListEntry;

