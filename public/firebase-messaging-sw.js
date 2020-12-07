importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope);
//       }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err);
//       });
//     }

firebase.initializeApp({
    messagingSenderId: "115992207732",
    projectId: "fir-push-notif-6d290",
    apiKey: "AIzaSyCVrxJnSbqY9QuBGbPdfPtTqOzyw553egQ",
    appId: "1:115992207732:web:11bbf881e9229fdb5b0c21"
});

const initMessaging = firebase.messaging();

initMessaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: '/firebase-logo.png'
    };
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  
  self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
  });