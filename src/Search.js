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
      <input id='searchfield' type='text' placeholder='Search...' value={this.state.value} onChange={this.handleChange.bind(this)}/>

      <button  onClick={() => this.props.handleSearchButtonClick(this.state.value, this.state.watched)}>GO</button>
      </div>
    )
  }
}

export default Search;
