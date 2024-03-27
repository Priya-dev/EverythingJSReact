import * as React from 'react';

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBox = ({ onChange }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search countries"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
