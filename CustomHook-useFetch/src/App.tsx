import React, { useEffect } from 'react';
import './style.css';
import useKeyPress from './useKeyPress';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const { data, isError, isLoading } = useKeyPress(
    'https://jsonplaceholder.typicode.com/posts'
  );
  console.log(isError);
  if (isLoading) <h1>Loading...</h1>;
  if (isError) <p>errored out...</p>;

  useEffect(() => {
    //additional logic with data
  }, [data]);

  return (
    <div>
      <div className="container">
        <h1>useFetchHook</h1>
        {isLoading ? <h1>Loading...</h1> : null}
        {isError ? <p>Errored out...</p> : null}
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <li>{item.title}</li>
              </div>
            );
          })}
      </div>
    </div>
  );
}
