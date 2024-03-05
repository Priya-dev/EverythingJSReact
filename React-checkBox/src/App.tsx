import * as React from 'react';
import Checkbox from './Components/Checkbox';
import { list } from './list';
import './style.css';

export default function App() {
  const [checked, setChecked] = React.useState({});
  const [selected, setSelected] = React.useState(false);

  const handleChange = (key) => {
    setChecked({
      ...checked,
      [key]: !checked[key],
    });
    setSelected(false);
  };

  const handleSelectAll = () => {
    setSelected((prevSelected) => {
      if (prevSelected) {
        let modData = list.map((item) => {
          checked[item.name] = false;
          return checked[item.name];
        });
      } else {
        let modData = list.map((item) => {
          checked[item.name] = true;
          return checked[item.name];
        });
      }
      return !selected;
    });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <h1 className="font-medium text-white text-base">Algochurn</h1>
      <h2 className="font-bold text-white text-xl mb-4">
        <div>
          <Checkbox
            key={Math.random()}
            checked={selected}
            onChange={handleSelectAll}
            label="Select All"
          />
        </div>
      </h2>
      <div>
        {list.map((item) => (
          <Checkbox
            key={item.id}
            checked={checked[item.name]}
            onChange={() => handleChange(item.name)}
            label={item.name}
          />
        ))}
      </div>
    </div>
  );
}
