import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ChartContainer from './components/ChartContainer';
import SelectCountry from './components/SelectCountry';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header title="BITCOIN PRICE INDEX" />
        <SelectCountry />
        <ChartContainer />
      </div>
    );
  }
}

export default App;
