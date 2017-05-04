/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const dropdown = ({
  options,
  fields = {
    name: 'name',
    value: 'value'
  },
  props
}) => {
  const Dropdown = ({ value, onValue }) => {
    const edit = ({ target: { value } }) => onValue(value); // eslint-disable-line max-len, no-shadow, react/prop-types

    return (
      <select onBlur={edit} onChange={edit} value={value} autoFocus {...props}>
        {options.map((option, i) =>
          <option key={i} value={option[fields.value]}>
            {option[fields.name]}
          </option>
        )}
      </select>
    );
  };
  Dropdown.propTypes = {
    value: PropTypes.string.isRequired,
    onValue: PropTypes.func.isRequired
  };

  return Dropdown;
};

export default dropdown;
