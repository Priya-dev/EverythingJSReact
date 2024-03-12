import React, { useState } from 'react';
import './home.css';
import SearchSVG from '../icons/Search';
import { navlinks } from '../constants/navlinks';
import { useHistory } from 'react-router-dom';

const Modal = () => {
  const history = useHistory();
  const [searchParams, setSearchParams] = useState('');

  const handleChange = (e) => {
    setSearchParams(e.target.value);
  };

  const handleList = (item) => {
    setSearchParams(item.name);
    history.push(item.link);
  };

  return (
    <div className="modal">
      <div className="item">
        <div className="searchBar">
          <SearchSVG className={undefined} />
          <input
            value={searchParams}
            type="search"
            autoFocus
            onChange={() => handleChange}
          />
        </div>
        <div className="item">
          <h4>Algo churn pages</h4>
          {navlinks.map((item) => {
            let Comp = item.icon;
            return (
              <div
                key={item.name}
                onClick={(e) => {
                  handleList(item);
                }}
                className="list"
              >
                <Comp className=".svg" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
