import React from 'react';

const Results = (props) => {

  // const [clicks, setClicks] = useState(0);

  // const updateCounter = () => {
  //   let newCount = clicks + 1;
  //   setClicks(newCount);
  // }

  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
