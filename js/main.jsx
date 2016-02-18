var React = require('react');
var ReactDOM = require('react-dom')

//Component

var MarsQuiz = React.createClass({

  render: function() {
    return (
      <div className="container">
        <section className="sidebar">
          <h1>Mars</h1>
          <div className="logo-container">
            <i className="fa fa-space-shuttle spaceship"></i>
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


ReactDOM.render(<MarsQuiz />, document.querySelector('.mount-node'));
