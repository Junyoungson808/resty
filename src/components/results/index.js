import React from 'react';
// import '../results.scss';

const Results = (props) => {

  // const [clicks, setClicks] = useState(0);

  // const updateCounter = () => {
  //   let newCount = clicks + 1;
  //   setClicks(newCount);
  // }

  return (
    <div className="resultsBox">
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
    </div>
  );
}

export default Results;
