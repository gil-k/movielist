import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      watched: false,
      towatch: false,
      watchedBgColor: 'white',
      toWatchBgColor: 'white'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
    this.handleToWatchClick = this.handleToWatchClick.bind(this);
  }

  handleWatchedClick(){
    if (this.state.watched) {
      this.setState({
        watched: false,
        watchedBgColor: 'white'
      });

    } else {
      this.setState({
        watched: true,
        watchedBgColor: 'green'
      });
      if (this.state.towatch) {
        this.setState({
          towatch: false,
          toWatchBgColor: 'white'
        });
      }
    }
    this.props.handleWatchedButtonClick({watched: this.state.watched, towatch: this.state.towatch});
  }

   handleToWatchClick(){
    if (this.state.towatch) {
      this.setState({
        towatch: false,
        toWatchBgColor: 'white'
      });

    } else {
      this.setState({

        towatch: true,
        toWatchBgColor: 'green'
      });
      if (this.state.watched) {
        this.setState({
          watched: false,
          watchedBgColor: 'white'
        });
      }
    }
    this.props.handleWatchedButtonClick({watched: this.state.watched, towatch: this.state.towatch});
  }

  handleInputChange(e){
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return(

      <div>
        <button
          onClick={this.handleWatchedClick}
          style={{backgroundColor:this.state.watchedBgColor}}>Watched</button>

        <button
          onClick={this.handleToWatchClick}
          style={{backgroundColor:this.state.toWatchBgColor}}>To Watch</button>

        <input value={this.state.value} onChange={this.handleInputChange} type="text" placeholder="Search.." name="search"/>

        <button type="submit" onClick={() => this.props.handleSearchButtonClick(this.state.value, this.state.watched)}>
        <i class="fa fa-search"></i>
        </button>

      </div>

    )
  }
}

export default Search;
