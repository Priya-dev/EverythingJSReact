import * as React from 'react';
import './modal.css';

export default function Modal({ callback }) {
  return (
    <div className="modal-backdrop" onClick={callback}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button onClick={callback}>Close</button>
      </div>
    </div>
  );
}
