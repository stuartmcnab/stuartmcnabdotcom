import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Footer from './footer';

export default function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
    };
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}