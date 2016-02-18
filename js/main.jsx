'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserhistory, Redirect } from 'react-router';

//Components

import Questions from './components/questions.jsx';


var MarsQuiz = React.createClass({

  render: function() {
    return (
      <Questions />
    );
  }
});


ReactDOM.render(<MarsQuiz />, document.querySelector('.mount-node'));
