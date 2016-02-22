var React = require('react');
import {browserHistory} from 'react-router';

var Accepted = React.createClass ({

  render() {
    return (
      <div className="accepted-bkg">
        <div className="results">
          <h2>Accepted</h2>
          <div className="accept-spaceship">
            <i className="fa fa-space-shuttle spaceship-icon"></i>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Accepted;
