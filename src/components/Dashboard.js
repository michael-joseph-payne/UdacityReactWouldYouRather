import React, { Component } from 'react'

import Nav from './Nav'
import QuestionThumbnailContainer from './QuestionThumbnailContainer'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Question from './Question'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      question: null,
    };
  }
  
  selectView = (selectedView) => {
    this.setState({
      view: selectedView
    });
  }
  
  selectQuestion = (selectedQuestion, view) => {
    this.setState({
      question: selectedQuestion
    }, this.selectView(view));
  }
  
  getView = () => {
    switch(this.state.view){
      case 'leaderBoard' :
        return <LeaderBoard />
      case 'newQuestion' :
        return <NewQuestion />
      case 'question' :
        return <Question question={ this.state.question } />  
      default :
        return <QuestionThumbnailContainer selectView={ this.selectView }  selectQuestion={ this.selectQuestion } />
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