import { useEffect, useState } from "react";

const useDebounceHook = <T>(value: T, delay = 500) => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const setValue = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(setValue);
  }, [value, delay]);

  return debounced;
};

export default useDebounceHook;
