import React from 'react';
import PropTypes from 'prop-types'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  MyApp.propTypes = {
    Component: PropTypes.node.isRequired,
    pageProps: PropTypes.node.isRequired,

    };
  return (
    <>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'/>
      <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp