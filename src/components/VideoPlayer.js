import React, { Component } from 'react';
import video from '../assets/Draft.mp4' ;
import video1 from '../assets/TeraGhata.mp4';
export default class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    } 

    videoPlay=()=>{
        this.videoRef.current.play();
    }

    videoPause=()=>{
        this.videoRef.current.pause();
    } 

    render() {
        return (
            <div>
           
                <video ref={this.videoRef} width="500" height="300" controls>
                  <source src={video} type="video/mp4"></source>
                </video>
                
                <video ref={this.videoRef} width="500" height="300" controls>
                  <source src={video1} type="video/mp4"></source>
                </video>

                <div>
                   <button onClick={this.videoPause}>Pause</button>
                   <button onClick={this.videoPlay}>Play</button>
               </div>

            </div>
        );
    }
}

