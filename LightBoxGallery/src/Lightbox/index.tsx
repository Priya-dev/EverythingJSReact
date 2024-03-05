import React, { useEffect, useState } from 'react';
import '../style.css';
import { images } from '../images';

export default function Lightbox() {
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (data) => {
    setActiveItem(data);
    setActive(!active);
  };

  const handleSmallClick = (data) => {
    setActiveItem(data);
  };

  return (
    <div className="box">
      {images.map((item) => {
        return (
          <div className="item">
            <img
              className="image"
              src={item}
              onClick={() => {
                handleClick(item);
              }}
            />
          </div>
        );
      })}
      {active &&
        images.map((item) => {
          return (
            <div className="cont">
              <div className="item">
                <img
                  className="smallImg"
                  src={item}
                  onClick={() => {
                    handleSmallClick(item);
                  }}
                />
              </div>
            </div>
          );
        })}
      {active && (
        <div className="modal">
          <img src={activeItem} />
        </div>
      )}
    </div>
  );
}
