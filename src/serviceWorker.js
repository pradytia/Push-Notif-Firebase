// import firebase from '../public/firebase-messaging-sw'


export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('firebase-messaging-sw.js')
        .then(function (registration) {
          console.log('Registration successful, scope is:', registration.scope);
          return registration.scope;
        })
        .catch(function (err) {
          console.log('Service worker registration failed, error:', err);
          return err;
        });
    }
  };