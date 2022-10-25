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
          <button className="allButtons" onClick={handleMethod} id="get">GET</button>
          <button className="allButtons" onClick={handleMethod} id="post">POST</button>
          <button className="allButtons" onClick={handleMethod} id="put">PUT</button>
          <button className="allButtons" onClick={handleMethod} id="delete">DELETE</button>
        </label>
      </form>
    </>
  );
};

export default Form;
