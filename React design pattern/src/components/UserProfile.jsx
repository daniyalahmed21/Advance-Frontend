import React from 'react';
import withLoading from './withLoading';

const UserProfile = ({ name, email }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};


export default withLoading(UserProfile);