import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    user: [
      {
        id: 1,
        name: 'reena',
        age: 26,
      },
      {
        id: 2,
        name: 'meenu',
        age: 27,
      },
      {
        id: 3,
        name: 'teena',
        age: 28,
      },
    ],
  };

  render() {
    return (
      <div className='container'>
        {this.state.user.map((value, index) => (
          <Users />
        ))}
      </div>
    );
  }
}

export default Users;
