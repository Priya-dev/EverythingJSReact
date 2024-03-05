import React, { useEffect, useState } from 'react';
import { items as defaultItems } from './items';
import './style.css';

export default function MultipleFilters() {
  const [items, setItems] = useState(defaultItems);
  const [selected, setSelected] = useState({});

  let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];

  const handleSelect = (key) => {
    if (selected[key]) {
      let modData = { ...selected };
      delete modData[key];
      setSelected(modData);
    } else {
      setSelected({ ...selected, [key]: key });
    }
  };

  useEffect(() => {
    let filteredItems = defaultItems;
    if (Object.keys(selected).length > 0) {
      filteredItems = defaultItems.filter((item) =>
        Object.values(selected).includes(item.category)
      );
    }
    setItems(filteredItems);
  }, [selected]);

  // const handleClick = (data) => {
  //   let modData = [];
  //   if (Object.keys(selected).length > 0) {
  //     for (let key in data) {
  //       console.log(key);
  //       const revData = items.filter((item) => {
  //         return item.category === data[key];
  //       });
  //       modData = [...modData, ...revData];
  //     }
  //   }
  //   return modData;
  // };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Algochurn Filters</h2>
      <div className="buttons-container">
        {filters.map((el, idx) => (
          <button
            className={`button ${
              Object.keys(selected).includes(el) ? 'sel' : ''
            }`}
            key={`filters-${idx}`}
            onClick={() => handleSelect(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="items-container">
        {items.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
