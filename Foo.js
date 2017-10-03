import React from 'react';
import PropTypes from 'proptypes';

const Foo = (props) => {
  const getName = (properties) => {
    const bar = 'bar';
    return `${properties.name}-${bar}`;
  };

  return (
    <div>
      <p>
        Hello {getName(props)}
      </p>
    </div>
  );
};

Foo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Foo;
