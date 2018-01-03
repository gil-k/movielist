import React from 'react';

class MoviesWatchedList extends React.Component {

  handleClick(watched) {

    this.props.handleWatchedListClick(watched);
  }

  render() {
    return(
      <div>
        <button
          onClick={() => this.handleClick(true)} >Watched</button>

        <button
          onClick={() => this.handleClick(false)} >To Watch</button>
      </div>

    )
  }
}

export default MoviesWatchedList;