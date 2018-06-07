import {getBitcoinData} from '../lib/bitcoinServices';

const initState = {
  currentCurrency: '',
  data: []
};

export const DATA_LOAD = 'DATA_LOAD';
export const DATA_UPDATE = 'DATA_UPDATE';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const loadData = (data) => ({type:DATA_LOAD, payload: data});
export const updateCurrent = (value) => ({type: CURRENT_UPDATE, payload: value});
export const updateNewData = (data) => ({type: DATA_UPDATE, payload: data});

export const fetchData = (countryCode = 'PHP') => {
  return(dispatch) => {
    getBitcoinData(countryCode)
      .then(data => dispatch(loadData(data)))   
  }
}

export const updateCurrency = (value) => {
  return (dispatch) => {
    dispatch(updateCurrent(value))
  }
}

export default (state = initState, action) => {
  switch(action.type) {
    case DATA_LOAD:
      return {...state, data: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentCurrency: action.payload}
    default:
      return state
  }
}