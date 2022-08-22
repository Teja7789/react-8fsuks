import React from 'react';
import NumberFormat from 'react-number-format';
const TableCurrencyFormat = ({ value }) => {
  return (
    <NumberFormat
      value={value || 0}
      displayType={'text'}
      fixedDecimalScale
      decimalScale={2}
      thousandSeparator={true}
      prefix={'$'}
    />
  );
};

export default TableCurrencyFormat;
