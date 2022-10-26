import React from 'react';
import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('');
  const [url, setURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleApiCall({method, url});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={(e) => setURL(e.target.value)} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-testid="get-test" onClick={(e) => setMethod('GET')} id="get">GET</span>
          <span  id="post" onClick={() => setMethod('POST')}>POST</span>
          <span  id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span  id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;
