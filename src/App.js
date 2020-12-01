import React, { useEffect } from 'react';
import firebase from './firebase';

function App() {

  const[token, setToken] = React.useState('');

  useEffect(() => {
    const messaging = firebase.messaging();
    messaging.requestPermission()
    .then((token) =>{
        return messaging.getToken();
    }).then(token =>{
      setToken(token);
      console.log('token : ' + token);
    }).catch(err =>{
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
        <h1>Token anda = {token}</h1>
    </div>
  );
}

export default App;
