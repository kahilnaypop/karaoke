import React from 'react';
import Loading from '../../components/layout/Loading';
import './../../App.css'

const YouTubeSearch = ({ video }) => {
    if (!video) {
        return <div> </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof (video));
    return (
        <div>
             <div className='ui segment'>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    {/* <p>{video.snippet.description}</p> */}
                </div>
            <div className="video-link-container">
                <div className="video-link">
                    <iframe src={videoSrc} allowFullScreen title='Video player' />
                </div>
                </div>
                
               
            
        </div>

    )
}

export default YouTubeSearch