'use strict'

import React from 'react';
import browserHistory from 'react-dom';

var Timer = React.createClass({

  getInitialState: function() {
    var seconds = this.getSeconds();

    return {
      secondsElapsed: seconds,
    };
  },

  //this give you the total number of seconds to countdown
  getSeconds: function() {
    if(this.props.startMinutes >=1) {
      return this.props.startMinutes * 60;
    } else {
      return 60;
    }
  },

  secondsLeft: function() {
    return Math.floor(this.state.secondsElapsed % 60);
  },

  minutesLeft: function() {
    return Math.floor(this.state.secondsElapsed / 60);
  },

  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if (this.state.secondsElapsed <= 0) {
      clearInterval(this.interval);
    }
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  //built in React method
  componentWillReceiveProps: function(props) {
    if(props.start === true) {
      this.startTime();
    }
  },

  //clear the timer and starts the timer again
  /*resetTimer: function() {
  if (this.state.secondsElapsed === 0) {
  clearInterval(this.interval);
  }
  this.setState({secondsElapsed: 60});
  this.start();
  },*/

  render: function() {
    return (
      <div>
        {this.minutesLeft()}:{this.secondsLeft() < 10 ? "0" + this.secondsLeft() : this.secondsLeft()}
      </div>
    );
  }
});

module.exports = Timer;
