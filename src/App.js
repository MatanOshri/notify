// src/App.js
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    let interval;
    
    // Register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log('Service Worker registered');
      });
    }
    // Request notification permission
    Notification.requestPermission().then((permission) => {
      if (permission !== 'granted') {
        console.log('Notification permission denied');
      }
    });

    if (Notification.permission === 'granted') {
        interval = setInterval(() => {
        triggerNotification();
      }, 5000); // 60000 ms = 1 minute
    }
    
    return () => clearInterval(interval);
  }, []);

  const triggerNotification = async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    console.log("in")

    if (registration && 'showNotification' in registration) {
      console.log("show")
      registration.showNotification('Test Notification', {
        body: 'This is a test notification on mobile!',
        icon: '/icon.png',
      });
    }
  };

  return (
    <div>
      <h1>Your PWA</h1>
      <button onClick={triggerNotification}>Test Notification</button>
    </div>
  );
};

export default App;
