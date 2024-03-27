import * as React from 'react';
import { useState } from 'react';
import './dropDown.css';

interface Country {
  key: string | number | readonly string[];
}

interface DropdownProps {
  onChange: (value: string) => void;
  data: Country[];
  children: React.ReactNode;
}

const Dropdown = ({ data, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const options = data.map((country) => ({
    label: country,
    value: country,
  }));

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="selectContainer">
      <select
        onChange={handleChange}
        value={selectedValue}
        className="bloc"
        id="myselect"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {' '}
              {option.label}{' '}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
