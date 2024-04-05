import * as React from 'react';
import { files } from './data';
import Folder from './Folder';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Folder Structure</h1>
        <span>Algochurn</span>
      </div>
      <Folder files={files} />
    </div>
  );
}
