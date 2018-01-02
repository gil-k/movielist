import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleWatchedChange() {
    this.setState({
      watched: true
    })
  }
  handleToWatchChange() {
    this.setState({
      watched: false
    })
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
      watched: false
    });
  }


  render() {
    return(

      <div class="search-container">

      <div class="topnav">
        <div class="btn-group">

          <button type="button" class="btn btn-primary" onChange={this.handleWatchedChange} >Watched</button>
          <button type="button" class="btn btn-primary" onChange={this.handleToWatchChange} >To Watch</button>

        </div>
      </div>

        <input value={this.state.value} onChange={this.handleChange} type="text" placeholder="Search.." name="search"/>

        <button type="submit" onClick={() => this.props.handleSearchButtonClick(this.state.value, this.state.watched)}>
        <i class="fa fa-search"></i>
        </button>

      </div>

    )
  }
}

export default Search;
