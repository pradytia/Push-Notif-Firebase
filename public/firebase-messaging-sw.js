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
    apiKey: "AIzaSyCVrxJnSbqY9QuBGbPdfPtTqOzyw553egQ",
    authDomain: "fir-push-notif-6d290.firebaseapp.com",
    databaseURL: "https://fir-push-notif-6d290.firebaseio.com",
    projectId: "fir-push-notif-6d290",
    storageBucket: "fir-push-notif-6d290.appspot.com",
    messagingSenderId: "115992207732",
    appId: "1:115992207732:web:11bbf881e9229fdb5b0c21"
});

const initMessaging = firebase.messaging()