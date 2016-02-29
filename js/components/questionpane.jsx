'use strict'

var React = require('react');
import {browserHistory} from 'react-router';
import CurrentQuestion from './currentquestion.jsx';

//Component

var Questionpane = React.createClass({

  getInitialState: function() {
    return {
      correctCount: 0,
      questionIndex: 0
    };
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextState.questionIndex === nextProps.testQuestions.length) {
      this.state.correctCount === 2 ? this.props.onCorrect() : this.props.onFail();
    }
  },

  render: function() {

    return (
      <div className="test-question">
        <div>
          <CurrentQuestion
            currentQuestion={this.props.testQuestions[this.state.questionIndex]}
            onAnswer={this._handleUserAnswer} />
        </div>
        <input className="test-answer"></input>
        <button className="submit-button">Submit Answer</button>
      </div>
    );
  },

  _handleUserAnswer(userAnswer) {
    var correctAnswer = this.props.testQuestions[this.state.questionIndex].answer;
    var currentCorrectCount = this.state.correctCount;

    if (correctAnswer === userAnswer) {
      currentCorrectCount = currentCorrectCount + 1;
    }

    this.setState({
      correctCount: currentCorrectCount,
      questionIndex: this.state.questionIndex + 1
    });
  }
});

module.exports = Questionpane;
