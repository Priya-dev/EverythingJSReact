import * as React from 'react';
import Modal from './Modal';
import './style.css';

export default function App() {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="container">
        <button onClick={() => handleShow()}>Show Modal</button>
      </div>
      {show && <Modal callback={handleShow} />}
    </div>
  );
}
