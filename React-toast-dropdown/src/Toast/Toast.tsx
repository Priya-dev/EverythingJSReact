import React from 'react';
import './toast.css';

export default function Toast({ config, onClose }) {
  return (
    <div className="toastCont">
      <div className={`toast ${config.position}`}>
        <p>{config.title}</p>
        <button onClick={onClose} className="button">
          X
        </button>
      </div>
    </div>
  );
}
