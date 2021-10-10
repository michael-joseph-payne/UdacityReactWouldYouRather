import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { handleAnswerQuestion } from '../actions/questions.js' 

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    
    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onChangeValue(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    const { dispatch } = this.props;
    dispatch(handleAnswerQuestion(this.state.value, this.props.question))
      .then(this.props.selectView('home'))
  }
  
  getView() {
    if(this.props.question && !this.props.isAnswered) {
      return (
        <Fragment>
          <div>{ this.props.authorData.name } asks:</div>
          <div>{ this.props.authorData.avatarURL }</div>
          <div>Would you rather</div>
    	  <div onChange={ this.onChangeValue }>
            <div>
              <input type="radio" value={ 'optionOne' } /> { this.props.question.optionOne.text }
    		</div>
    		<div>
    		  <input type="radio" value={ 'optionTwo' } /> { this.props.question.optionTwo.text }
    		</div>
    	  </div>
          <button onClick={ this.handleSubmit } >Submit</button>
        </Fragment>
      )
    } else if (this.props.question && this.props.isAnswered) {
      const totalVotes = this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length;
      return (
        <Fragment>
          <div>Asked by { this.props.authorData.name }</div>
		  <div>{ this.props.authorData.avatarURL }</div>
          <div>Results:</div>
		  <div>{ this.props.question.optionOne.text }</div>
		  <div>{ this.props.question.optionOne.votes.length } out of { totalVotes } votes</div>
    	  <div>{ this.props.question.optionTwo.text }</div>
          <div>{ this.props.question.optionTwo.votes.length } out of { totalVotes } votes</div>
        </Fragment>
      )
    } else {
      return 'There doesn\'t seem to be anything here.';
    }
  }
  
  render() {
    return (
      <div>
        { this.getView() }
      </div>
    );
  }
}

export default connect()(Question);