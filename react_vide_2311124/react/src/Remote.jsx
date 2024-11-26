import React, { useState } from 'react';
import './Remote.css';

export default function Remote() {
  const [isOn, setIsOn] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [fan, setFan] = useState(false);
  const [swing, setSwing] = useState(false);
  const [mode, setMode] = useState('COOL');
  const [timer, setTimer] = useState('');

  const modes = ['COOL', 'DRY', 'AUTO', 'HEATING'];

  const handlePower = () => {
    setIsOn((prev) => !prev);
    if (isOn) {
      setFan(false);
      setSwing(false);
      setTimer('');
    }
  };

  const handleIncreaseTemp = () => {
    if (isOn && temperature < 30) {
      setTemperature((prev) => prev + 1);
    }
  };

  const handleDecreaseTemp = () => {
    if (isOn && temperature > 16) {
      setTemperature((prev) => prev - 1);
    }
  };

  const handleFan = () => {
    if (isOn) setFan((prev) => !prev);
  };

  const handleSwing = () => {
    if (isOn) setSwing((prev) => !prev);
  };

  const handleMode = () => {
    if (isOn) {
      const currentIndex = modes.indexOf(mode);
      const nextMode = modes[(currentIndex + 1) % modes.length];
      setMode(nextMode);
    }
  };

  const handleTimer = () => {
    if (isOn) {
      setTimer('30 min');
      setTimeout(() => setTimer(''), 3000); 
    }
  };

  return (
    <div className="remote-container">
      <div className="remote-screen">
        {isOn ? (
          <div className="remote-screen-display">
            <p>{temperature}°C</p>
            <p>{mode}</p>
            {fan && <p>Fan Icon</p>}
            {swing && <p>Swing Icon</p>}
            {timer && <p>Timer: {timer}</p>}
          </div>
        ) : (
          <div className="remote-screen-off"></div>
        )}
      </div>
      <div className="remote-buttons">
        <div className="button-row">
          <button className="remote-button" onClick={handlePower}>
            {isOn ? 'OFF' : 'ON'}
          </button>
        </div>
        <div className="button-row">
          <button className="remote-button" onClick={handleIncreaseTemp}>
            +
          </button>
          <button className="remote-button" onClick={handleDecreaseTemp}>
            -
          </button>
        </div>
        <div className="button-row">
          <button className="remote-button" onClick={handleFan}>
            FAN
          </button>
          <button className="remote-button" onClick={handleSwing}>
            SWING
          </button>
        </div>
        <div className="button-row">
          <button className="remote-button" onClick={handleMode}>
            MODE
          </button>
          <button className="remote-button" onClick={handleTimer}>
            TIMER
          </button>
        </div>
      </div>
    </div>
  );
}
