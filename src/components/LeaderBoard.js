import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  createDataStructure() {
    const { users } = this.props;
    
    //Gets the users from the store and stores them in an array with a calculated score
    let userData = Object.entries(users).map(([ key, user ]) => {
      user.score = Object.keys(user.answers).length + user.questions.length;
      return user;
	});
    
    //Sort in descending order of score
    userData.sort((a, b) => a.score - b.score).reverse();
    
    return userData;
  }
  
  render() {
    const data = this.createDataStructure();
    
    return (
      <div>
        {data.map((user) => {
      	  return (
            <div key={ user.id }>
              <div>{ user.avatarURL }</div>
    		  <div>{ user.name }</div>
    		  <div>Answered questions { Object.keys(user.answers).length }</div>
    		  <div>Created questions { user.questions.length }</div>
    		  <div>
                <div>Score</div>
    			<div>{ user.score }</div>
    		  </div>
    		</div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users: users
  }
}

export default connect(mapStateToProps)(LeaderBoard);