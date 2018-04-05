/* eslint-disable no-shadow, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const input = ({ props } = {}) => {
  const Input = ({ value, onValue }) => {
    const onKeyUp = ({ key, target: { value } }) => {
      if (key === 'Enter') {
        onValue(parseValue(value));
      }
    };
    const onBlur = (event) => { // eslint-disable-line react/prop-types
      const { target: { value } } = event;

      if (event.nativeEvent.explicitOriginalTarget &&
        event.nativeEvent.explicitOriginalTarget === event.nativeEvent.originalTarget) {
        return;
      }

      onValue(parseValue(value));
    };
    const parseValue = v => (value === parseFloat(value) ? parseFloat(v) : v);

    return (
      <input
        defaultValue={value}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        autoFocus
        {...props}
      />
    );
  };
  Input.propTypes = {
    value: PropTypes.any,
    onValue: PropTypes.func
  };

  return Input;
};

export default input;
