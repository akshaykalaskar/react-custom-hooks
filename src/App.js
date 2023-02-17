import React, { useState, useEffect } from 'react';
import './style.css';
import UserList from './UserList';

export default function App() {
  const [users, setUser] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then((data) => data.json())
      .then((response) => {
        setUser(response);
      });
  }, []);

  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      {users && <UserList users={users} />}
    </div>
  );
}
