'use strict'

import React from 'react';
import browserHistory from 'react-dom';

//Component

var Welcome = React.createClass({

  showQuestionsPage: function() {
  this.props.history.push('/questions')
  },

  render: function() {
    return (
      <div>
        <button onClick={this.showQuestionsPage}>Take the Test</button>
      </div>
    );
  }
});

module.exports = Welcome;
