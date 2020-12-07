import Axios from 'axios';
import React from 'react';
// import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Webcam from "react-webcam";
 
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
   
function CameraPage (props) {
    const webcamRef = React.useRef(null);
    const[img, setImg]= React.useState('');
    const[enableWebCam, setEnableWebCam]= React.useState(false);
 
  const capture = React.useCallback(
    () => {
      setEnableWebCam(false)
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc)
      appendToFormData(imageSrc);
    
    },
    [webcamRef]
   
  );


  const dataURItoBlob = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}


const appendToFormData = (URI) => {

  var blob = dataURItoBlob(URI);

  var data = {};
  data["customer_id"] = "015";
  data["created_by"] = "admin";

  var fd = new FormData();
  fd.append("file", blob, "webimage.jpg");
  fd.append("json", JSON.stringify(data));


  var options = {
    headers : {
        'Content-Type' : 'multipart/form-data'
    }
  };

  Axios.post('http://localhost:8080/csp1_core/pwa-v1/master/image', fd, options)
  .then(res => {
      console.log('success')
  }).catch(err => {
    console.log('failed')
      console.log(err)
  })
}

  const onBtnClickCamera = () => {
    setEnableWebCam(true);
  }

  const onBtnCloseCamera = () => {
    setEnableWebCam(false);
    setImg('')
  }

  const uploadFile = (event) => {
    const file = event.target.files[0];
    var formData = new FormData();
    formData.append("image", file);
      // Display the key/value pairs
    for (var pair of formData.entries()) {
      console.log(pair[0]); 
    }
  }
 
  return (
    <>
      {
        img && enableWebCam === false
        ?
        <>
          <img src={img}/><br/>
          <button onClick={onBtnClickCamera}>Open</button>
          <button onClick={onBtnCloseCamera}>Close</button>
        </>
        :
        <> 
          {
            enableWebCam
            ?
            <>
               <Webcam
                audio={false}
                height={480}
                width={480}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={480}
                videoConstraints={videoConstraints}
              />
              <button onClick={capture}>Capture photo</button>
              <button onClick={onBtnCloseCamera}>Close</button>
            </>

            :
            <>
              <img src="https://i.stack.imgur.com/l60Hf.png" style={{ width : '100px '}}/>
              <button onClick={onBtnClickCamera}>Open</button>
            </>
          }
          
        </>
      }
      {/* <input type="file" id="file" name="file" onChange={uploadFile}/> */}
      {/* <img src="https://invent-integrasi.com:8443/images/CashPickUp/customer/015_20201207131242.jpg"/> */}
    </>
  );     
}
 
export default CameraPage;