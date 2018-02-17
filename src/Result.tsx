import * as React from 'react';
import './App.css';

export default class Result extends React.Component {
  render() {
    return (
      <div className="Result">
        <header className="Result-header">
          <h1 className="Result-title">Results</h1>
        </header>
        <p className="Result-intro">
          Here are the results for {this.state}
        </p>
      </div>
    );
  }
}
