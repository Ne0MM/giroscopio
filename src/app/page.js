"use client"

import { useEffect, useState } from 'react';

function GyroscopeComponent() {

  const [gyroscopeData, setGyroscopeData] = useState({ x: null, y: null, z: null });

  const [ atData, setAtData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
      return () => {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      };
    } else {
      console.log('Gyroscope not supported');
    }
  }, []);

  const handleOrientation = (event) => {
    setGyroscopeData({
      x: event.beta,
      y: event.gamma,
      z: event.alpha
    });

    if(atData.x - event.beta > 5 || atData.x - event.beta < -5){
      setAtData({
        x: event.beta,
        y: event.gamma,
        z: event.alpha
      });
    }else if(atData.y - event.gamma > 5 || atData.y - event.gamma < -5){
      setAtData({
        x: event.beta,
        y: event.gamma,
        z: event.alpha
      });
    }else if(atData.z - event.alpha > 5 || atData.z - event.alpha < -5){
      setAtData({
        x: event.beta,
        y: event.gamma,
        z: event.alpha
      });
    }

  };

  return (
    <div>
      <h2>Gyroscope Data:</h2>

      <p>X: {atData.x}</p>
      <p>Y: {atData.y}</p>
      <p>Z: {atData.z}</p>

      <h1>rData</h1>

      <p>X: {gyroscopeData.x}</p>
      <p>Y: {gyroscopeData.y}</p>
      <p>Z: {gyroscopeData.z}</p>

    </div>

  );
}

export default function Home() {
  return (
    <div>
      <h1>Next.js Gyroscope Example</h1>
      <GyroscopeComponent />
    </div>
  );
}