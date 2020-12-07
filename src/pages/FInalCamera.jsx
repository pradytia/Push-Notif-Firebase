import React from 'react';
import CameraPage from './TakeCamera';


function FinalCamera(){

    const [playing, setPlaying] = React.useState(false);

    const HEIGHT = 120;
    const WIDTH = 120;

    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia
    }

    return(
        <div className="camera">
            <div className="camera-container">
                <video
                    
                >

                </video>
                <CameraPage/>
            </div>

        </div>
    )
}

export default FinalCamera;