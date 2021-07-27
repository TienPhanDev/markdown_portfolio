import React from 'react';
import "../styles/index.css"
import PropTypes from 'prop-types';
import { ThemeProvider } from '../components/themeContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
