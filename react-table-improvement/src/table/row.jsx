import React, { PropTypes } from 'react';

const TableRow = props => {
  const { children, ...rest } = props;

  return (
    <tr {...rest}>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  isNew: PropTypes.bool
};

export default TableRow;
