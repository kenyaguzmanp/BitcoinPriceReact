import React, {Component} from 'react';
import {connect} from 'react-redux';
import currencies from '../supported-currencies.json';
import {updateCurrency, fetchData} from '../reducers/bitcoin';

class SelectCountry extends Component {

  onCurrencySelect = (evt) => {
    this.props.fetchData(evt.target.value);
    this.props.updateCurrency(evt.target.value);
  }

  render() {
    const {currentCurrency} = this.props.updateCurrency;
    return (
      <div className="select-container">
        <span style={{fontSize: 18, fontFamily: 'Bungee'}}> Select your curreny: </span>
        <select
          value={currentCurrency}
          onChange={this.onCurrencySelect}
        >
          {currencies.map((cur, index) => 
            <option
              key={`${index}-${cur.country}`}
              value={cur.currency}
            >
              {cur.currency}
            </option>
          )}
        </select>
      </div>
    )
  }
}

export default connect(
  (state) => ({currentCurrency: state.bitcoinData.currentCurrency}),
  {updateCurrency, fetchData}
)(SelectCountry);