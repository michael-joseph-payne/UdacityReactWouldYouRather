import React, { Component } from 'react'

class Login extends Component {
  componentDidMount() {
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit');
  }
  
  render() {
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
      		    <option value="grapefruit">Grapefruit</option>
      		    <option value="lime">Lime</option>
      		    <option value="coconut">Coconut</option>
      		    <option value="mango">Mango</option>
			  </select>
      	      <input type="submit" value="Submit" />
      		</label>
      	  </form>
        </div>
      </div>
    );
  }
}

export default Login;
