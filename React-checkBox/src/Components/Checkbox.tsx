import * as React from 'react';
import './Checkbox.css';

interface Props {
  checked: boolean;
  onChange: (key: any) => void;
  label: string;
}

export default function Checkbox({ checked, onChange, label }: Props) {
  return (
    <div>
      <label className="container">
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
