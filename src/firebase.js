import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCVrxJnSbqY9QuBGbPdfPtTqOzyw553egQ",
    authDomain: "fir-push-notif-6d290.firebaseapp.com",
    databaseURL: "https://fir-push-notif-6d290.firebaseio.com",
    projectId: "fir-push-notif-6d290",
    storageBucket: "fir-push-notif-6d290.appspot.com",
    messagingSenderId: "115992207732",
    appId: "1:115992207732:web:11bbf881e9229fdb5b0c21"
};

firebase.initializeApp(config);

export default firebase;