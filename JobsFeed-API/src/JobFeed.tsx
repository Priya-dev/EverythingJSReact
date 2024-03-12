import React, { useEffect, useState } from 'react';
import styles from './JobFeed.module.css';
import useFetchHook from './useFetchHook';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/jobstories.json';

const JobFeed = () => {
  const [jobs, setJobs] = useState({ start: 0, end: 5 });
  const { isLoading, isError, data } = useFetchHook(
    BASE_URL,
    jobs.start,
    jobs.end
  );
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    if (data) {
      setNewsFeed((prevNewsFeed) => [...prevNewsFeed, ...data]);
    }
  }, [data]);

  const handleClick = () => {
    setJobs((prevJobs) => ({
      start: prevJobs.start + 5,
      end: prevJobs.end + 5,
    }));
  };

  const handleItem = (url) => {
    window.location.href = url;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Hackernews Jobs</h1>
      {isLoading && <div>Loading .. </div>}
      {isError && <div>Errored out..</div>}
      <div className={styles.jobGrid}>
        {newsFeed &&
          newsFeed.map((item) => {
            return (
              <div
                className={styles.item}
                key={item.id}
                onClick={() => handleItem(item.url)}
              >
                <p>
                  Id: <span className={styles.span}>{item.id}</span>
                </p>
                <h4>{item.title}</h4>
                <p>{new Date(item.time).toLocaleDateString()}</p>
                <p>
                  {' '}
                  Posted by: <span className={styles.span}> {item.by} </span>
                </p>
              </div>
            );
          })}
      </div>
      <button onClick={handleClick} className={styles.loadMoreBtn}>
        Load More
      </button>
    </div>
  );
};

export default JobFeed;
