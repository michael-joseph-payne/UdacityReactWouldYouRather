import React, { Component } from 'react'

import Nav from './Nav'
import QuestionThumbnailContainer from './QuestionThumbnailContainer'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    };
  }
  
  selectView = (selectedView) => {
    this.setState({
      view: selectedView
    });
  }
  
  getView = () => {
    switch(this.state.view){
      case 'leaderBoard' :
        return <LeaderBoard />
      case 'newQuestion' :
        return <NewQuestion />
      default :
        return <QuestionThumbnailContainer />
    }
  }
  
  render() {
    return (
      <div>
        <Nav selectView={ this.selectView } />
		{this.getView()}
      </div>
    );
  }
}

export default Dashboard;