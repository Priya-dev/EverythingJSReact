import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Toast from './Toast/Toast';

export default function App() {
  const [show, setShow] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [toastConfig, setToastConfig] = useState({
    title: '',
    position: '',
    icon: '',
  });

  const handleChange = (e, key) => {
    const value = e.target.value;
    setToastConfig({ ...toastConfig, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToasts((prevToasts) => [...prevToasts, { toastConfig }]);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setToasts((prevToasts) => prevToasts.slice(0, -1));
  };
  // React.useEffect(() => {}, [toasts]);

  return (
    <div>
      <div className="container">
        <h1>Toasts </h1>
        <div className="box">
          <form>
            <div className="item">
              <label htmlFor="title">Toast title</label>
              <input
                id="title"
                type="text"
                value={toastConfig.title}
                name="title"
                onChange={(e) => handleChange(e, 'title')}
              />
            </div>
            <div className="item">
              <label htmlFor="position">Position</label>
              <select
                name="position"
                value={toastConfig.position}
                onChange={(e) => handleChange(e, 'position')}
                id="position"
              >
                <option />
                <option value="topRight"> Top right </option>
                <option value="topLeft"> Top left </option>
                <option value="bottomRight"> Bottom right </option>
                <option value="bottomLeft"> Bottom left </option>
              </select>
            </div>
          </form>
        </div>
        <button onClick={(e) => handleSubmit(e)}> Show Toast </button>
      </div>
      <div className="toast-container">
        {toasts.length > 0 &&
          toasts.map((item, index) => (
            <Toast
              config={item?.toastConfig}
              onClose={(e) => handleClose(e)}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
