import React from 'react';

var CurrentQuestion = React.createClass({

  _handleRightAnswer() {
    this.props.onAnswer("Yes");
  },

  render() {
    return (

      <div>
        <p>{this.props.currentQuestion.question}</p>
        <input className="test-answer"></input>
        <button className="submit-button" onClick={this._handleRightAnswer}>Submit Answer</button>
      </div>
    );
  }
});

CurrentQuestion.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired
  }).isRequired,
  onAnswer: React.PropTypes.func.isRequired
};

module.exports = CurrentQuestion;
