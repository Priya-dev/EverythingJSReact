import React, { useEffect } from 'react';
import './style.css';
import useKeyPress from './useKeyPress';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const data = useKeyPress(16);
  return (
    <div>
      <div className="container">
        <h1>useKeyPress</h1>
        {data && <Toaster />}
      </div>
    </div>
  );
}
