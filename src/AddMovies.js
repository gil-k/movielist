import React from 'react';


class AddMovies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    // console.log(this.state.value);
  }
  handleClick() {
    console.log('in handleClick');
    this.props.handleAddButtonClick(this.state.value);
  }

  render() {
    return(
      <div>
        <input
          id='inputfield' type='text'
          placeholder='Add movie title here'
          value={this.state.value}
          onChange={this.handleChange} />

        <input
          type='button'
          onClick={this.handleClick}
          value='Add' />
      </div>
    )
  }
}

export default AddMovies;
