'use strict'

var React = require('react');

import Timer from './timer.jsx';
import Questionpane from './questionpane.jsx';

var testQuestions = [
  {
    question: "Is Mars fourth from the sun?",
    answer: "yes"
  },
  {
    question: "Does Mars have subsurface water?",
    answer: "yes"
  },
  {
    question: "Does Mars have seasons?",
    answer: "yes"
  },
];

var Taketest = React.createClass({

  // this replaced browserHistory
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      startup: false
    }
  },

  _handleCorrect: function() {
    this.context.router.push('/accepted');
  },

  _handleFail: function() {
    this.context.router.push('/rejected');
  },

  beginTest: function() {
    this.setState({startup: true});
  },

  render: function() {

    return (
      <div>
        <div className="countdown">
            <Timer
              start={this.state.startup}
              startMinutes={1}
              onTimerFinished={this._handleFail} />
        </div>
        <div>
          {!this.state.startup && <button onClick={this.beginTest}>Begin Test</button>}
          {this.state.startup &&
            <Questionpane
              questions={testQuestions}
              onCorrect={this._handleCorrect}
              onFail={this._handleFail} />
          }
        </div>
      </div>
    );
  }
});

module.exports = Taketest;
