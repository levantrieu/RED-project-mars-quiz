'use strict'

import React from 'react';
import browserHistory from 'react-dom';

//Component

var Welcome = React.createClass({

//if a method is only used within this component use the underscore
  _handleShowQuestionsPage: function() {
  this.props.history.push('/questions')
  },

  render: function() {
    return (
      <div>
        <button onClick={this._handleShowQuestionsPage}>Take the Test</button>
      </div>
    );
  }
});

module.exports = Welcome;
