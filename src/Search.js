import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }


  render() {
    return(
      <div>
      <input id='searchfield' type='text' placeholder='enter search key words' value={this.state.value} onChange={this.handleChange.bind(this)}/>

      <input type='button' onClick={() => this.props.handleSearchButtonClick(this.state.value)} />
      </div>
    )
  }
}

export default Search;
