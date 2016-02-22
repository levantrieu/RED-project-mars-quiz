'use strict'

import React from 'react';
import browserHistory from 'react-dom';

//Component

var TestQuestions = React.createClass({

  getInitialState: function() {
    return {
      marsQuestions: ['How far is Mars?']
    }
  },

  render: function() {
    return (
      <div className="test-question">
        <div>
          {this.state.marsQuestions}
        </div>
        <input className="test-answer"></input>
        <button className="submit-button">Submit Answer</button>
      </div>
    );
  }
});

module.exports = TestQuestions;
