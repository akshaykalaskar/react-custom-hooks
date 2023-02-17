import React from 'react';

export default function UserList(props) {
  const users = props.users;
  return (
    <ol>
      {users.map((user) => (
        <li className="user">{user.name}</li>
      ))}
    </ol>
  );
}
