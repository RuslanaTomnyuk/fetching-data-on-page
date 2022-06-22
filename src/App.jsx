import React from 'react';
import './App.scss';
import { UserTable } from './components/UserTable';

export const App = () => (
  <div className="app">
    <section className="section">
      <div className="container">
        <h1 className="title">
          Mate Academy
        </h1>

        <div className="columns">
          <div className="column">
            <p className="subtitle">
              Users table
            </p>
            <UserTable />
          </div>
        </div>
      </div>
    </section>
  </div>
);
