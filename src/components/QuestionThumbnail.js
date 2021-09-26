import React, { Component } from 'react'

class QuestionThumbnail extends Component {
  render() {
    console.log(this.props.question);
    return (
      <div>
        {this.props.question.id}
      </div>
    );
  }
}

export default QuestionThumbnail;