import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      userId: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    if(!this.state.userId) {
      alert('Please select a user!');
    } else {
      this.props.dispatch(setAuthedUser(this.state.userId));
    }
  }
  
  render() {
    const {users} = this.props;
    
    return (
      <Fragment>
        <div>
      	  <h3>Welcome to the Would You Rather App!</h3>
      	  <p>Please sign in to continue</p>
        </div>
        <div>
      	  <form onSubmit={this.handleSubmit}>
      		<label>
      		  Sign In
			  <div>
      	        <select onChange={this.handleChange}>
				  <option key={null} value={null}>Select</option>
				  {Object.entries(users).map(([key, user]) => {
      			    return (
                      <option key={key} value={user.id}>{user.name}</option>
                    )
				  })}
			    </select>
			  </div>
      	      <input type="submit" value="Submit" />
      		</label>
      	  </form>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users: users,
  }
}

export default connect(mapStateToProps)(Login);