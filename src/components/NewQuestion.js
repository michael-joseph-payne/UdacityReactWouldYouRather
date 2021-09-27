import React, { Component } from 'react'

class NewQuestion extends Component {
  render() {
    return (
      <div>
        <div>Create New Question</div>
        <div>Complete the question:</div>
        <div>Would you rather {'...'}</div>
		<input type="text" />
		<div>OR</div>
		<input type="text" />
		<div>
		  <button>Submit</button>
		</div>
      </div>
    );
  }
}

export default NewQuestion;