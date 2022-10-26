import React from 'react';
import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  // const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method || 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };

  const handleMethod = (e) => {
    setMethod(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-testid="get-test" className="allspans" onClick={handleMethod} id="get">GET</span>
          <span className="allspans" id="post">POST</span>
          <span className="allspans" id="put">PUT</span>
          <span className="allspans" id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;
