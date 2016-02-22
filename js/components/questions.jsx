'use strict'

var React = require('react');
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
import TakeTest from './taketest.jsx';


//Component



var Questions = React.createClass({

  getInitialState: function() {
    return {
      startup: false
  }
},

  _handleCorrect: function() {
    browserHistory.push('/accepted');
  },

  _handleFail: function() {
    browserHistory.push('/rejected');
  },

beginTest: function() {
  this.setState({ startup: true });
},

render: function() {

  var testQuestions = [
    {
      question: "Is Mars fourth from the sun?",
      answer: "Yes"
    },
    {
      question: "Does Mars have subsurface water?",
      answer: "Yes"
    },
    {
      question: "Does Mars have seasons?",
      answer: "Yes"
    }
  ];

  return (
    <div>
      <div className="countdown">
          <Timer
            start={this.state.startup}
            startMinutes={1}
            onTimerFinished={this._handleFail} />
      </div>
      <div>
        { !this.state.startup ?
          <button onClick={this.beginTest}>Begin Test</button> : ""}
        { !this.state.startup ?
          "" :
          <TakeTest onCorrect={this._handleCorrect}
                    onFail={this._handleFail}
                    testQuestions={testQuestions} /> }
      </div>
    </div>
  );
}
});

module.exports = Questions;
