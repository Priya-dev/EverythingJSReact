import React, { useEffect } from 'react';
import Lightbox from './Lightbox';

import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Lightbox Gallery</h1>
        <span>Algochurn</span>
        <Lightbox />
      </div>
    </div>
  );
}
