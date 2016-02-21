'use strict'

import React from 'react';
import browserHistory from 'react-router';
import Timer from './timer.jsx';


//Component

var Questions = React.createClass({

  getInitialState: function() {
    return {
      startup: false
  }
},

beginTest: function() {
  this.setState( { startup: true });
},

render: function() {
  return (
    <div>
      <div className="timer">
        <div className="countdown">
          <Timer start={this.state.startup} startTime={1} />
        </div>
      </div>
      <div>
        { !this.state.startup ? <button className="evaluate" onClick={this.beginTest}>Begin Test</button> : ""}
        { !this.state.startup ? "" : <TestQuestions /> }
      </div>
    </div>
  );
}

//from jill
  /*render: function() {
    return (
      <div>
        <div>
          <div className="timer">
          <Timer start={this.state.startup} startTime={1} />
          { !this.state.startup ? <button className="evaluate" onClick={this.beginTest}>Begin Test</button> : ""}
          { !this.state.startup ? "" : <TestQuestions /> }
          </div>
          <div className="countdown">
            <Timer />
          </div>
        </div>
        <button>Begin the Quiz</button>
      </div>
    );
  }*/
});

module.exports = Questions;
