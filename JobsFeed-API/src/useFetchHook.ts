import React, { useEffect, useRef, useState } from 'react';

const useFetchHook = (url, start, end) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState([]);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      try {
        let response = await fetch(url);
        let responseData = await response.json();
        let newData = responseData.slice(start, end);
        let arrResp = [];

        for (let id of newData) {
          let responseNew = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
            { signal: abortControllerRef.current?.signal }
          );
          let responseDataNew = await responseNew.json();
          arrResp.push(responseDataNew);
        }

        setData([...arrResp]);
      } catch (e) {
        if (e.name === 'AbortError') {
          console.log('Aborted');
          return;
        }
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, start, end]);

  return { isLoading, isError, data };
};

export default useFetchHook;
