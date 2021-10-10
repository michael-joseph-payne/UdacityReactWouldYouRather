import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/questions.js'

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: null,
      question2: null,
    };
    
    this.handleQuestion1Change = this.handleQuestion1Change.bind(this);
    this.handleQuestion2Change = this.handleQuestion2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleQuestion1Change(event) {
    this.setState({
      question1: event.target.value,
    });
  }
  
    handleQuestion2Change(event) {
    this.setState({
      question2: event.target.value,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const { question1, question2 } = this.state;
    const { dispatch } = this.props;
    
    dispatch(handleAddQuestion(question1, question2))
      .then(this.props.selectView('home'))
  }
  
  render() {
    return (
      <div>
        <div>Create New Question</div>
        <div>Complete the question:</div>
        <div>Would you rather {'...'}</div>
		<input type="text" onChange={ this.handleQuestion1Change } />
		<div>OR</div>
		<input type="text" onChange={ this.handleQuestion2Change } />
		<div>
		  <button onClick={ this.handleSubmit } >Submit</button>
		</div>
      </div>
    );
  }
}

export default connect()(NewQuestion);