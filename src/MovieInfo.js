import React from 'react';

class MovieInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieinfo: ''
    };
  }

  render() {
    return(
      <div>
      {'Movie Info'}
      </div>
    )
  }
}

export default MovieInfo;