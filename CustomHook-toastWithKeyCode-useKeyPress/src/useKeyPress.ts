import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function useKeyPress(key) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === key) {
        setIsKeyPressed(true);
        toast('Shift key pressed'); // Show toast when shift key is pressed
      }
    }

    function handleKeyUp(e) {
      if (e.keyCode === key) {
        setIsKeyPressed(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [key]);

  return isKeyPressed;
}
