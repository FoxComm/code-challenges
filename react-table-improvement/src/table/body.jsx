import _ from 'lodash';
import { autobind } from 'core-decorators';
import React, { PropTypes } from 'react';
import TableRow from './row.jsx';
import TableCell from './cell.jsx';

export default class TableBody extends React.Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    renderRow: PropTypes.func,
    predicate: PropTypes.func,
    processRows: PropTypes.func,
    detectNewRows: PropTypes.bool,
    emptyMessage: PropTypes.string
  };

  static defaultProps = {
    predicate: entity => entity.id,
    processRows: _.identity,
    detectNewRows: false,
    emptyMessage: ''
  };

  @autobind
  defaultRenderRow(row, index) {
    const rowKey = this.props.predicate && this.props.predicate(row) || index;
    return (
      <TableRow key={`row-${rowKey}`}>
        {this.props.columns.map((column, cellIdx) => {
          return (
            <TableCell column={column} key={`cell-${cellIdx}`}>
              {row[column.field]}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }

  get tableRows() {
    if (_.isEmpty(this.props.rows) && this.props.emptyMessage) {
      return (
        <tr>
          <td colSpan={this.props.columns.length}>
            {this.props.emptyMessage}
          </td>
        </tr>
      );
    }

    const renderRow = this.props.renderRow || this.defaultRenderRow;

    return _.flatten(this.props.rows.map((row, index) => {
      return renderRow(row, index);
    }));
  }

  render() {
    return (
      <tbody className="fc-table-tbody">
        {this.props.processRows(this.tableRows)}
      </tbody>
    );
  }
}
