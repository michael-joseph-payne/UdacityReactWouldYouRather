import React, { Component, Fragment } from 'react'

class Question extends Component {
  getView() {
    if(this.props.question && !this.props.isAnswered) {
      return (
        <Fragment>
          <div>{ this.props.authorData.name } asks:</div>
          <div>{ this.props.authorData.avatarURL }</div>
          <div>Would you rather</div>
    	  <div>{ this.props.question.optionOne.text }</div>
    	  <div>{ this.props.question.optionTwo.text }</div>
          <button>Submit</button>
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

export default Question;