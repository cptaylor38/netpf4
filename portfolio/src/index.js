import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta name='description' content='Full-Stack Developer'></meta>
      <meta name='title' content='Corbin Taylor Portfolio'></meta>
      <meta name='robots' content='index, follow'></meta>
      <link
        icon='icon'
        href={require('./assets/images/selfietestimg4.svg')}
      ></link>
      <meta
        name='keywords'
        content='Fullstack, Developer, Engineer, Frontend, React, Javascript'
      ></meta>
      <meta name='author' content='Corbin Taylor'></meta>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
