import React, { PropTypes } from 'react';

import _ from 'lodash';

const TableCell = props => {
  const { children, colspan, column, ...rest } = props;

  let cell = null;

  if (!_.isNull(children)) {
    const type = _.get(column, 'type', '');
    switch (type) {
      case 'temperature':
        cell = <span>{children} ºC</span>;
        break;
      case 'image':
        cell = <img src={children}/>;
        break;
      default:
        cell = children;
        break;
    }
  }

  return <td className="fc-table-td" colSpan={colspan} {...rest}>{cell}</td>;
};

TableCell.propTypes = {
  children: PropTypes.node,
  colspan: PropTypes.number,
  column: PropTypes.object
};

export default TableCell;
