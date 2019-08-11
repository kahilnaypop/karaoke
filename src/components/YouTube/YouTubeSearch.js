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
        <React.Fragment >
            <div className='chosen-track-title-container'>
                <div className='chosen-track-title'>
                    <h4>{video.snippet.title}</h4>
                    {/* <p>{video.snippet.description}</p> */}
                </div>
            </div>

            <div className="lyricss">

                <iframe src={videoSrc} allowFullScreen title='Video player' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>


        </React.Fragment >

    )
}

export default YouTubeSearch