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
      isAnswered: false,
      authorData: null
    };
  }
  
  selectView = (selectedView) => {
    this.setState({
      view: selectedView
    });
  }
  
  selectQuestion = (data, view, isAnswered) => {
    this.setState({
      question: data.question,
      isAnswered: isAnswered,
      authorData: data.authorData
    }, this.selectView(view));
  }
  
  getView = () => {
    switch(this.state.view){
      case 'leaderBoard' :
        return <LeaderBoard />
      case 'newQuestion' :
        return <NewQuestion selectView={ this.selectView } />
      case 'question' :
        return <Question selectView={ this.selectView } question={ this.state.question } isAnswered={ this.state.isAnswered } authorData={ this.state.authorData } />  
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