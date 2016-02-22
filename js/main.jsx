'use strict'

import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Components

import Welcome   from './components/welcome.jsx';
import Questions from './components/questions.jsx';
import TestQuestions from './components/testquestions.jsx';
import Timer   from './components/timer.jsx';
import NotFound  from './components/404.jsx';

var MarsQuiz = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/questions' component={Questions} />
        <Route path='/test-questions' component={TestQuestions} />
        <Route path='/timer' component={Timer} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<MarsQuiz />, document.querySelector('.content-area'));
