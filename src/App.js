import Axios from 'axios';
import React from 'react';
import firebase from './firebase';
import CameraPage from './pages/TakeCamera';
import camera from './pages/camera';

function App() {

  const[token, setToken] = React.useState('');

  // React.useEffect(() => {
  //   getTokenFirebase();
  //   sendNotif();
  // });


  const getTokenFirebase = () => {
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
  };

  const sendNotif = () => {  

    let header = {
      "authorization": "key=AAAAGwGsoXQ:APA91bGSCGFaByz50bS36wtvFvZ_wMp-dDiIc7kEKfatAduo3vwYevfKArSN5piPoX3yyssGGpHlUbi92OQ0bDviVmLvAk_Jk8_EkGP7YGU-jUigZl-bwTJI6GG9pvP2ePIy08QKdwK1",
      "content-type": "application/json"
    }

    let data = {
      "notification": {
        "title": "Promo",
        "body": "Ada Promo terbaru 10% "
      },
      "to" : token
    }

    Axios.post("https://fcm.googleapis.com/fcm/send", JSON.stringify(data), { headers : header})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  return (
    <div className="App">
        <CameraPage/>
    </div>
  );
}

export default App;
