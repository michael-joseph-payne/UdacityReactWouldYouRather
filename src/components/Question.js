import React, { Component, Fragment } from 'react'

class Question extends Component {
  getQuestion = () => {
    if(this.props.question) {
      return (
        <Fragment>
          <div>{ `${ this.props.question.userName } asks` }</div>
          <div>Would you rather</div>
          <div>{ this.props.question.avatar }</div>
          <div>{ this.props.question.optionOne }</div>
          <div>{ this.props.question.optionTwo }</div>
          <button>Submit</button>
        </Fragment>
      )
    } else {
      return null;
    }
  }
  
  render() {
    return (
      <div>
        {this.props.question ?
          this.getQuestion() :
          'Error finding question object.'
        }
      </div>
    );
  }
}

export default Question;