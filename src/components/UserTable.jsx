import React from 'react';

const users = [
  {
    id: 1, name: 'Leanne Greham', email: 'sincer@jank.com',
  },
  {
    id: 2, name: 'Leanne Greham', email: 'sincer@jank.com',
  },
  {
    id: 3, name: 'Leanne Greham', email: 'sincer@jank.com',
  },
  {
    id: 4, name: 'Leanne Greham', email: 'sincer@jank.com',
  },
];

export const UserTable = () => (
  <table className="table is-narrow">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>/</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="button" type="button">
              <span className="icon">
                <i className="far fa-eye" />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
