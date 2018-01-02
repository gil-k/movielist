import React from 'react';
// import logo from './logo.svg';
import './App.css';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: this.props.movie.title,
      // watched: this.props.movie.watched,
      // bgColor: (this.props.movie.watched ? 'green' : 'white')
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   if (this.state.bgColor === 'green') {
  //     this.setState({
  //       // watched: false,
  //       bgColor: 'white'
  //     });
  //     this.props.handleMovieEntryWatchedClick(this.props.movie.id, false);
  //   } else {
  //     this.setState({
  //       bgColor: 'green'
  //     });
  //     this.props.handleMovieEntryWatchedClick(this.props.movie.id, true);
  //   }
  // }

  render() {
    return (
      <div>
        {this.props.movie.title}

          <button
            onClick={() => this.props.handleMovieListEntryClick(this.props.movie)}

            style={{backgroundColor:this.props.bgColor}}>Watched</button>

      </div>
    );
  }
}

export default MovieListEntry;

              // <button
              //   onClick={this.handleClick}
              //   style={{backgroundColor:this.state.bgColor}}>Watched</button>
