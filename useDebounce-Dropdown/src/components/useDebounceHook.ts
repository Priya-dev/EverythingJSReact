import * as React from 'react';
import { useState } from 'react';

const useDebounceHook = <T>(value: T, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);
  return debounced;
};

export default useDebounceHook;
