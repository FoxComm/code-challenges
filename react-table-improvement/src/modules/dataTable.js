
import { createReducer, createAction } from 'redux-act';

export const setState = createAction('SET_STATE');

const initialState = {
  rows: [
    {altitude:0, temp: 15, boilingTemperature: 100},
    {altitude:1000, temp: 15, boilingTemperature: 96.7},
    {altitude:2000, temp: 15, boilingTemperature: 93.5},
    {altitude:3000, temp: 15, boilingTemperature: 90.3},
    {altitude:4000, temp: 0, boilingTemperature: 86.5},
    {altitude:5000, temp: -10, boilingTemperature: 82.7},
    {altitude:6000, temp: -15, boilingTemperature: 79.0},
    {altitude:7000, temp: -20, boilingTemperature: 75.3},
    {altitude:8000, temp: -25, boilingTemperature: 71.5},
  ]
};

const reducer = createReducer({
  [setState]: (state, payload) => {
    return {
      ...state,
      payload
    };
  }
}, initialState);

export default reducer;
