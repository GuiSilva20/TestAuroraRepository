// Clock.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { rotationHours, rotationMinutes, rotationSeconds } = getHandRotations(currentTime);

  return (
    <ClockWrapper>
      <div className="face">
        <p className="v-index">II</p>
        <p className="h-index">II</p>

        <div className="hand">
          <div className="hour" style={{ transform: `rotate(${rotationHours}deg)` }} />
          <div className="minute" style={{ transform: `rotate(${rotationMinutes}deg)` }} />
          <div className="second" style={{ transform: `rotate(${rotationSeconds}deg)` }} />
        </div>
      </div>
    </ClockWrapper>
  );
};

function getHandRotations(date: Date) {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  return {
    rotationSeconds: seconds * 6,
    rotationMinutes: minutes * 6 + seconds * 0.1,
    rotationHours: (hours % 12) * 30 + minutes * 0.5,
  };
}

const ClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .face {
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    outline: 10px solid #333;
    background: repeating-radial-gradient(circle at 50% 50%, 
      rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, 
      transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, 
      transparent 3%),
      conic-gradient(white 0%, silver 10%, white 35%, silver 45%, 
      white 60%, silver 70%, white 80%, silver 95%, white 100%);
    box-shadow: inset 0 0 20px #0007;
  }

  .hour, .minute, .second {
    position: absolute;
    transform-origin: center bottom;
  }

  .hour {
    width: 5px;
    height: 60px;
    background: #aaa;
    left: 87.5px;
    top: 43px;
    border-radius: 3px 3px 1px 1px;
    transform-origin: 2px 47px;
    box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
    z-index: 1;
  }

  .minute {
    width: 4px;
    height: 78px;
    background: #aaa;
    left: 88px;
    top: 25px;
    border-radius: 3px 3px 1px 1px;
    transform-origin: 2px 65px;
    box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
    z-index: 2;
  }

  .second {
    width: 10px;
    height: 10px;
    background: red;
    left: 85px;
    top: 85px;
    border-radius: 50%;
    border: 1px solid #eee;
    z-index: 3;
  }

  .second::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 85px;
    left: 3px;
    bottom: -10px;
    background: red;
    border-radius: 2px;
    box-shadow: 5px 0 2px rgba(128, 128, 128, 0.2);
  }

  .second::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    left: 2px;
    top: 2px;
    background: #555;
    border-radius: 50%;
  }

  .v-index {
    position: absolute;
    color: #333;
    font-size: 24px;
    left: 83.5px;
    top: -3px;
    text-shadow: 0 157px 0 #333;
    z-index: 1;
  }

  .h-index {
    position: absolute;
    color: #333;
    font-size: 24px;
    top: 72px;
    left: 5px;
    transform: rotate(-90deg);
    text-shadow: 0 158px 0 #333;
    z-index: 1;
  }
`;

export default Clock;
