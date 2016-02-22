'use strict'

import React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
import TestQuestions from './testquestions.jsx';


//Component

var Questions = React.createClass({

  getInitialState: function() {
    return {
      startup: false
  }
},

beginTest: function() {
  this.setState({ startup: true });
},

render: function() {
  return (
    <div>
      <div className="countdown">
          <Timer start={this.state.startup} startMinutes={1} />
      </div>
      <div>
        { !this.state.startup ? <button onClick={this.beginTest}>Begin Test</button> : ""}
        { !this.state.startup ? "" : <TestQuestions /> }
      </div>
    </div>
  );
}
});

module.exports = Questions;
