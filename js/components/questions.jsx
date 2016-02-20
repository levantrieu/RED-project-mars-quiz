'use strict'

import React from 'react';
import browserHistory from 'react-router';
import Timer from './timer.jsx';


//Component

var Questions = React.createClass({

  render: function() {
    return (
      <div>
        <div className="timer">
          <div className="countdown"><Timer /></div>
        </div>
        <button>Begin the Quiz</button>
      </div>
    );
  }
});

module.exports = Questions;
