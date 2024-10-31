import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// if ('serviceWorker' in navigator && 'PushManager' in window) {
//   navigator.serviceWorker.register('/service-worker.js')
//       .then((registration) => {
//           console.log('Service Worker registered:', registration);
//           initializePushNotifications(registration);
//       })
//       .catch((error) => console.error('Service Worker registration failed:', error));
// }

// async function getVapidPublicKey() {
//   const response = await fetch('https://notify-backend-1mc5.onrender.com/vapidPublicKey');
//   const data = await response.json();
//   console.log(data)

//   return data.publicKey;
// }

// async function initializePushNotifications(registration) {
//   try {
//       const vapidPublicKey = await getVapidPublicKey();
//       const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

//       // Subscribe the client
//       const subscription = await registration.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: convertedVapidKey,
//       });

//       // Send subscription to backend to save
//       await fetch('https://notify-backend-1mc5.onrender.com/subscribe', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(subscription),
//       });

//       console.log('Push subscription successful:', subscription);
//   } catch (error) {
//       console.error('Error subscribing to push notifications:', error);
//   }
// }

// // Helper function to convert VAPID key to Uint8Array
// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }