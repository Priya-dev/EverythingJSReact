import { useEffect, useState } from "react";
import "./style.css";
import useDebounceHook from "./useDebounceHook";
import { User } from "./utils";
import SearchBar from "./SearchBar";
import React = require("react");

export default function DebounceSearch() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const debounced = useDebounceHook(search);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetch(debounced);

      setUsers(users);
      setLoading(false);
    };
    fetchData();
  }, [debounced]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Search</h2>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading... </div>}
      <div className="items-container">
        {!loading &&
          users.map((item, idx) => (
            <div key={`items-${idx}`} className="item">
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
