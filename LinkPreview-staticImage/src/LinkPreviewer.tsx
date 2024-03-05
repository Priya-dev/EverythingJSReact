import * as React from 'react';
import Modal from './Modal';
import './style.css';

export default function LinkPreviewer({ url, children }) {
  const imageRef = React.useRef(null);
  const [show, setShow] = React.useState(false);
  // Write your code here
  // Documentation on how to screenshot any website:
  // https://microlink.io/screenshot
  // React.useEffect(() => {
  //   function handleMouseOver(event) {
  //     event.preventDefault();
  //     setShow(true);
  //   }
  //   imageRef.current.addEventListener('mouseenter', handleMouseOver);
  //   return () => {
  //     imageRef.current.removeEventListener('mouseleave', handleMouseOver);
  //   };
  // }, [imageRef]);

  React.useEffect(() => {
    function handleMouseOver(event) {
      setShow(true);
    }

    function handleMouseOut(event) {
      setShow(false);
    }

    const childrenElement = imageRef.current;
    if (childrenElement) {
      childrenElement.addEventListener('mouseenter', handleMouseOver);
      childrenElement.addEventListener('mouseleave', handleMouseOut);
    }

    return () => {
      if (childrenElement) {
        childrenElement.removeEventListener('mouseenter', handleMouseOver);
        childrenElement.removeEventListener('mouseleave', handleMouseOut);
      }
    };
  }, [imageRef]);

  return (
    <div>
      <span className="children">
        <div ref={imageRef}>
          {children}
          {show && (
            <Modal>
              <img src={url} />
            </Modal>
          )}
        </div>
      </span>
    </div>
  );
}
