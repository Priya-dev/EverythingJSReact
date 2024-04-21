import React, { useEffect, useRef, useState } from 'react';
import './document.css';

export const Document = () => {
  const [val, setVal] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        const docArea = document.getElementById('docArea');
        const listElement = document.createElement('p');
        listElement.textContent = val;
        docArea.appendChild(listElement);

        listElement.classList.add('fadein'); // Add fadein class immediately after appending

        setTimeout(() => {
          listElement.classList.remove('fadein'); // Remove fadein class after 2 seconds
        }, 2000);

        setVal('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [val]);

  return (
    <div className="box">
      <div className="textArea" id="textArea">
        <input
          value={val}
          type="text"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </div>
      <div className="document" id="docArea"></div>
    </div>
  );
};
