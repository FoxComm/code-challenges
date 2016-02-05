
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TableView from './table/tableview.jsx'

import * as tableActions from './modules/dataTable';

function mapStateToProps(state) {
  return {
    tableState: state
  };
}

class DataTable extends React.Component {
  get tableColumns() {
    return [
      {field: 'altitude', text: 'Altitude (in meters)'},
      {field: 'temp', text: 'Ambient temperature', type: 'temperature'},
      {field: 'boilingTemperature', text: 'Boiling Temperature', type: 'temperature'},
    ]
  }
  render() {
    const props = this.props;

    return (
      <TableView
        columns={this.tableColumns}
        data={props.tableState}
        />
    );
  }
}

export default connect(mapStateToProps, tableActions)(DataTable);
