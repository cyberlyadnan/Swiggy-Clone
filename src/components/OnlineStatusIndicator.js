import React from 'react'
import {useState, useEffect} from 'react';

const OnlineStatusIndicator = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    <div>
      <span className={`text-sm font-medium ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
      {isOnline ? '🟢' : '🔴'}
    </span>
    </div>
  )
}

export default OnlineStatusIndicator
