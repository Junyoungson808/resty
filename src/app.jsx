import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
  }

  useEffect(() => {
    const getData = async () => {
      if (requestParams.url) {
        const response = await axios({
          method: requestParams.method,
          url: requestParams.url,
        })
        setData(response.data);
      }
    }
    getData();
  }, [requestParams]);


  // useEffect(() => {
  //   console.log(requestParams);
  //   axios(requestParams)
  //     .then(response => setData(response.data.results));
  // }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div className='url-box'>
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
