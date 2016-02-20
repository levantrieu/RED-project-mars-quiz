'use strict'

import React from 'react';

var Timer = React.createClass({

  getInitialState: function() {
    return {
    secondsElapsed: 60
    }
  },

  // clear the timer and starts the timer again
  resetTimer: function() {
    if (this.state.secondsElapsed === 0) {
      clearInterval(this.interval);
    }
    this.setState({secondsElapsed: 60});
    this.start();
  },

  // this function will decrease the timer by 1 second
  countDown: function() {
    //this.setState is needed to access the countDown.
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if (this.state.secondsElapsed === 0) {
      clearInterval(this.interval);
    }
  },

  // this starts the timer at different intervals
  start: function() {
    this.setState({secondsElapsed: 60});
    this.interval = setInterval(this.countDown, 1000);
  },

  // sets the countdown delay
  componentDidMount: function() {
    setTimeout(this.start, this.props.timeout);
  },

  render: function() {
    return (
      <div>
        {this.state.secondsElapsed}
      </div>
    );
  }
});

module.exports = Timer;
