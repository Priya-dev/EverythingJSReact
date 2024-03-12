import React, { useEffect, useState } from 'react';

export default function useShowModal(key) {
  const [state, setState] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.which === key) {
        setState(true);
      }
    }

    function handleKeyUp() {
      // setState(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [key]);

  return state;
}
