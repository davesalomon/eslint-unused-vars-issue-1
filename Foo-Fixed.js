import React from 'react';
import PropTypes from 'proptypes';

const Foo = (props) => {
  const getName = ({ name }) => {
    const bar = 'bar';
    return `${name}-${bar}`;
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
