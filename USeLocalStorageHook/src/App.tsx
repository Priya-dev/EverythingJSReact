import * as React from 'react';
import './style.css';
import useLocalStorage from './useLocalStorage';

export default function App() {
  const [selectedValue, setSelectedValue] = useLocalStorage('theme', 'light');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}
