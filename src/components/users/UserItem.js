import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

const UserItem = (props) => {
  const user = props;
  const { id, name, age } = user;
  return (
    <div className='card'>
      <div className='card-body'>
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
