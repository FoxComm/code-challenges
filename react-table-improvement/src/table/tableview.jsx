import React, { PropTypes } from 'react';
import Table from './table.jsx';

const TableView = props => {
  let setState = null;
  if (props.setState) {
    setState = params => {
      props.setState({...props.data, ...params});
    };
  }

  return (
    <div className="fc-tableview">
      <Table {...props} setState={setState}/>
    </div>
  );
};

TableView.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.shape({
    rows: PropTypes.array,
    total: PropTypes.number,
    from: PropTypes.number,
    size: PropTypes.number
  }),
  setState: PropTypes.func,
  renderRow: PropTypes.func,
  processRows: PropTypes.func,
  emptyMessage: PropTypes.string,
  className: PropTypes.string,
  detectNewRows: PropTypes.bool,
};

TableView.defaultProps = {
  data: {
    rows: [],
    total: 0,
  },
  detectNewRows: false,
};

export default TableView;
