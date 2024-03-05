import React, { useRef, useEffect, useState } from 'react';
import './style.css';

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default function App() {
  const [showToast, setShowToast] = useState(false);
  const blockRef = useRef(null);

  useOutsideClick(blockRef, () => {
    setShowToast(true);
  });

  const handleClickInsideBlock = () => {
    setShowToast(false);
  };

  return (
    <div>
      <div className="container">
        <h1>useOutsideClick</h1>
        <div className="block" onClick={handleClickInsideBlock} ref={blockRef}>
          Click outside to show toast
        </div>
        {showToast && <div id="snackbar">Some text some message..</div>}
      </div>
    </div>
  );
}
