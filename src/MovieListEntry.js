import React from 'react';
// import logo from './logo.svg';
import './App.css';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.movie.title,
      watched: this.props.movie.watched,
      bgColor: 'white'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if (this.state.watched) {
      this.setState({
        watched: false,
        bgColor: 'white'
      });
    } else {
      this.setState({
        watched: true,
        bgColor: 'green'
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.movie.title}

              <button
                onClick={this.handleClick}
                style={{backgroundColor:this.state.bgColor}}>Watched</button>

      </div>
    );
  }
}

export default MovieListEntry;
