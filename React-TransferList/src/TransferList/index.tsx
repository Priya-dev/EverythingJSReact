import React, { useState } from 'react';
import { data } from '../TransferList/data';
import './index.css';

export const TransferList = () => {
  const [box1, setBox1] = useState(data);
  const [box2, setBox2] = useState([]);

  const handleClick = (e) => (props, type) => {
    e.preventDefault();
    if (type === 'box1') {
      const modData1 = box1.map((item) =>
        item.id === props.id ? { ...item, checked: !item.checked } : item
      );
      setBox1(modData1);
    } else if (type === 'box2') {
      const modData2 = box2.map((item) =>
        item.id === props.id ? { ...item, checked: !item.checked } : item
      );
      setBox2(modData2);
    }
  };

  const handleSvgClick = (direction) => {
    if (direction === 'right') {
      const selectedItems = box1.filter((item) => item.checked);
      setBox2([...box2, ...selectedItems]);
      setBox1(box1.filter((item) => !item.checked));
    } else if (direction === 'left') {
      const selectedItems = box2.filter((item) => item.checked);
      setBox1([...box1, ...selectedItems]);
      setBox2(box2.filter((item) => !item.checked));
    }
  };

  return (
    <div className="container">
      <div className="item">
        <div>
          {box1?.map((item) => {
            return (
              <div
                className="list"
                onClick={(e) => handleClick(e)(item, 'box1')}
              >
                <button className={item.checked ? 'button' : ''}>
                  {item.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="itemArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => handleSvgClick('left')}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => handleSvgClick('right')}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
      <div className="item">
        <div>
          {box2.length > 0 ? (
            box2.map((item) => {
              return (
                <div className="list">
                  <button
                    onClick={(e) => handleClick(e)(item, 'box2')}
                    className={item.checked ? 'button' : ''}
                  >
                    {item.title}
                  </button>
                </div>
              );
            })
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
