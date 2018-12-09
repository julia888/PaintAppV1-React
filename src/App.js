import React, { Component } from 'react';

import './App.css';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
