import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  render() {
    const {dispatch, authedUser} = this.props;
    
    const logout = () => {
      dispatch(setAuthedUser(null))
    }
    
    return (
      <div>
        <nav className='nav'>
          <ul>
      		<li>
      		  {`Hello, ${authedUser}`}
      		</li>
            <li>
                <button onClick={ logout }>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser } = state;
  return {
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(Nav)