import React from 'react';

class AddMovies extends React.Component {
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
    // console.log(this.state.value);
  }

  render() {
    return(
      <div>
      <input id='inputfield' type='text'
        placeholder='Add movie title here'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}/>

      <input type='button'
        onClick={() => this.props.handleAddButtonClick(this.state.value)}
        value='Add'/>
      </div>
    )
  }
}

export default AddMovies;
