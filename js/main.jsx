'use strict'

import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Components

import Welcome      from './components/welcome.jsx';
import Questions    from './components/questions.jsx';
import Questionpane from './components/questionpane.jsx';
import Timer        from './components/timer.jsx';
import Rejected     from './components/rejected.jsx';
import Accepted     from './components/accepted.jsx';
import NotFound     from './components/404.jsx';

var MarsQuiz = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/questions' component={Questions} />
        <Route path='/questionpane' component={Questionpane} />
        <Route path='/rejected' component={Rejected} />
        <Route path='/accepted' component={Accepted} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<MarsQuiz />, document.querySelector('.content-area'));
