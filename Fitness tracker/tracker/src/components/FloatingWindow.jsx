import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './FloatingWindow.css'; // Import your CSS file for styling

const FloatingWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen((prev) => !prev);
  };

  const portalContainer = document.getElementById('portal-root');

  return (
    <div>
        <div className='track'>
      <button onClick={toggleWindow}>BOLD AND BRAVE</button>
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="floating-window" >
            <button className="close-button" onClick={toggleWindow} style={{backgroundColor:"black",border:"None"}}>
              <img src="./close.png" alt="" style={{height:"10px"}}/>
            </button>
            <div className='cgpt'>
            <p>Calories Burnt : <span>400</span></p>
            <p>Heart Rate     : <span>89</span></p>
            <p>Steps Walked   : <span>5000</span></p>
            </div>
          </div>,
          portalContainer
        )}
    </div>
  );
};

export default FloatingWindow;
