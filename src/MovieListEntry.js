import React from 'react';
import './App.css';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      watched: false,
      bgColor: 'white'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({
  //     value: !this.state.value
  //   });
  // }
  handleClick() {
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
      this.props.movieListEntryClick();
    }
    // this.setState({
    //   watched: false,
    //   bgColor: 'green'
    // });
  }

  render() {
    return (
      <div className="App">
        <div>

        {this.props.movie.title}
        <span>
          <div>
            <button
              onClick={this.handleClick}
              style={{backgroundColor:this.state.bgColor}}>Watched</button>
          </div>
        </span>


        </div>
      </div>
    );
  }
}

export default MovieListEntry;




