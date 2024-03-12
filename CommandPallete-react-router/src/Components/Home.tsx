import React, { useEffect, useRef, useState } from 'react';
import Modal from '../Components/Modal';
import useShowModal from '../Components/useShowModal';
import './home.css';

const Home = () => {
  const [show, setShow] = useState(false);
  const showModal = useShowModal(75);
  let currentRef = useRef(null);

  useEffect(() => {
    function outsideClick(event) {
      if (currentRef.current && !currentRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (showModal) setShow(true);

    document.addEventListener('mousedown', outsideClick);

    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  }, [showModal]);

  return (
    <div className="container">
      <h1>Command Palette</h1>
      <p className="desc">
        <span>CMD + K</span> opens a Search Modal to navigate through website
        pages.
      </p>
      <div ref={currentRef}>{show && <Modal />}</div>
    </div>
  );
};

export default Home;
