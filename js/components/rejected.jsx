var React = require('react');
import {browserHistory} from 'react-router';

var Rejected = React.createClass ({

  render() {
    return (
      <div className="fail-bkg">
        <div className="results">
          <h2>Rejected</h2>
        </div>
      </div>
    )
  }
});

module.exports = Rejected;
