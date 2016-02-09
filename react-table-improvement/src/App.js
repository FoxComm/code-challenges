import React, { Component } from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import tables from './modules/dataTable';

import DataTable from './dataTable.jsx';

const store = createStore(tables);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DataTable />
      </Provider>
    );
  }
}
