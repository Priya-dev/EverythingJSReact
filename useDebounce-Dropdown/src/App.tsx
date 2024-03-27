import * as React from 'react';
import CountriesList from './components/CountriesList';

import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Countries List Debounce </h1>
        <CountriesList />
      </div>
    </div>
  );
}
