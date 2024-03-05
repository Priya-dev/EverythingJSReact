import * as React from 'react';
import './style.css';

export default function Modal({ children }) {
  return (
    <div className="modal">
      <div className="imgCont">{children}</div>
    </div>
  );
}
