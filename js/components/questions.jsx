'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserhistory, Redirect } from 'react-router';

//Component

var Questions = React.createClass({

  render: function() {
    return (
      <div className="container">
        <section className="sidebar">
          <h1>Mars</h1>
          <div className="logo-container">
            <i className="fa fa-space-shuttle"></i>
          </div>
        </section>
        <section className="content-area">
          <div className="timer">
            <div className="countdown">10:00</div>
          </div>
          <div className="button-container">
            <button>Take the Quiz</button>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Questions;
