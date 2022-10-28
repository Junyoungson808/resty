import React from 'react';
import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('');
  const [url, setURL] = useState('');
  const [json, setJson] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleApiCall({method, url, json});
  };

  return (
    <>
    <div className="form-box">
      <form  onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-url" onChange={(e) => setURL(e.target.value)} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <textarea data-testid="form-text-area" className='json-text-area' onChange={(e) => setJson(e.target.value)} type='text' placeholder='input JSON' />

        <label className="methods">
          <span data-testid="get-test" onClick={(e) => setMethod('GET')} id="get">GET</span>
          <span  id="post" onClick={(e) => setMethod('POST')}>POST</span>
          <span  id="put" onClick={(e) => setMethod('PUT')}>PUT</span>
          <span  id="delete" onClick={(e) => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </div>
    </>
  );
};

export default Form;
