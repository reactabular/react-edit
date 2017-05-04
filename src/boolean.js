import React from 'react';
import PropTypes from 'prop-types';

const boolean = ({ props } = {}) => {
  const Boolean = ({ value, onValue }) => (
    <div {...props}>
      <button
        disabled={value}
        onClick={() => onValue(true)}
      >&#10003;
      </button>
      <button
        disabled={!value}
        onClick={() => onValue(false)}
      >&#10007;
      </button>
    </div>
  );
  Boolean.propTypes = {
    value: PropTypes.any,
    onValue: PropTypes.func
  };

  return Boolean;
};

export default boolean;
