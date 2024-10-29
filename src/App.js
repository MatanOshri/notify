// src/App.js
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Request notification permission on component mount
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        // Start sending notifications
        startSendingNotifications();
      }
    });
  }, []);

  const startSendingNotifications = () => {
    // Send a notification every minute
    setInterval(() => {
      new Notification('Hello!', {
        body: 'This is your notification every minute.',
      });
    }, 60000); // 60000 milliseconds = 1 minute
  };

  return (
    <div>
      <h1>Welcome to My PWA</h1>
      <p>You will receive notifications every minute.</p>
    </div>
  );
}

export default App;
