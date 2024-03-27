import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import SearchBox from './SearchBar';
import useDebounceHook from './useDebounceHook';
import './countriesList.css';

const CountriesList = () => {
  const [search, setSearch] = useState<string>('');
  const [countries, setCountries] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedVal = useDebounceHook(search);

  const handleCountryChange = (newList) => {
    console.log(newList, 'newList');
    setList((prevlist) => [...prevlist, newList]);
  };

  const handleXClick = (deletedItem) => {
    const newData = list.filter((data) => data !== deletedItem);
    setList(newData);
  };

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      let results = await fetch(
        `https://algochurn-server.onrender.com/practice/countries/${debouncedVal}`
      );
      let data = await results.json();
      setCountries(data.countries);
      setLoading(false);
    };
    fetchResults();
  }, [debouncedVal]);

  return (
    <div className="container">
      <SearchBox onChange={setSearch} />
      {search !== '' && loading && <div>Loading..</div>}
      {countries.length > 0 && search !== '' && (
        <Dropdown data={countries} onChange={handleCountryChange} />
      )}
      <div className="listBox">
        <h2>My list</h2>
        <div className="listContainer">
          {list.length > 0 &&
            list.map((item, id) => {
              return (
                <div className="item">
                  <p>{item}</p>
                  <button onClick={() => handleXClick(item)}>X</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
