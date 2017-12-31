import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  render() {
    return(
      <div>
      <input id='searchfield' type='text' placeholder='enter search key words'/>

      <input type='button' onClick={() => this.props.handleSearchInputClick()} />
      </div>
    )
  }
}

export default Search;

{/*
  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }
  handleButtonClick(e) {
    this.props.handleSearchInputClick(e.target.value);
  }
      <input type='text' value={this.state.value} onChange={this.handleInputChange} placeholder='enter search key words'/>
       <button onClick={this.handleButtonClick(this.state.value)} > </button>
*/}