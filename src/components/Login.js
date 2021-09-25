import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  componentDidMount() {
    
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit');
  }
  
  render() {
    const { users } = this.props;
    
    return (
      <div>
        <div>
      	  <h3>Welcome to the Would You Rather App!</h3>
      	  <p>Please sign in to continue</p>
        </div>
        <div>
      	  <form onSubmit={this.handleSubmit}>
      		<label>
      		  Sign In
      	      <select>
				{Object.entries(users).map(([key, value]) => {
      			  return (
                    <option key={ value.id }>{ value.name }</option>
                  )
				})}
			  </select>
      	      <input type="submit" value="Submit" />
      		</label>
      	  </form>
        </div>
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

export default connect(mapStateToProps)(Login);