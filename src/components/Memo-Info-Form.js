import React, { Component } from 'react';

class MemoInfoForm extends Component {

  state = {
    title : '',
    contents : '',
  }

  handleChange = (e) => {
    this.setState({
      title : e.target.value
    })
  }

  render(){
    return(
      <form>
        <input
          placeholder="제목"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <br />
        {this.state.title}
      </form>
    )
  }
}

export default MemoForm;