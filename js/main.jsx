'use strict'

import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Components

import Questions from './components/questions.jsx';
import Welcome   from './components/welcome.jsx';
import NotFound  from './components/404.jsx';

var MarsQuiz = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/mars-test' component={Questions} />
        <Route path='/welcome' component={Welcome} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<MarsQuiz />, document.querySelector('.mount-node'));
