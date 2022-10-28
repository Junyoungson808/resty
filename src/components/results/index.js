import React from 'react';
import './results.scss';

const Results = (props) => {

  return (
    <section className="result-section">
      <h3 className="result-h3">Results</h3>
      <pre className="result-pre" data-testid="result-pre-test">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
