import React, { Component } from 'react';
// import { Button } from "react-bulma-components/full";
import axios from 'axios';
// import '../../App.css';
// import Lyrics from '../tracks/Lyrics'
import '../../App.css';
import YTSearch from 'youtube-api-search';
import Loading from '../layout/Loading';
import YouTubeSearch from '../YouTube/YouTubeSearch'
// import VideoList from '../YouTube/VideoList'



const musixApi = process.env.REACT_APP_MUSIX_API_KEY
// console.log(musixApi)
let youTubeKey = process.env.REACT_APP_YOUTUBE_API_KEY


class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackTitle: '',
      trackArtist: '',
      searchedTrack: [],
      searchedLyrics: '',
      trackId: null,
      video: null
    };

    this.findTrack = this.findTrack.bind(this)
    this.trackChange = this.trackChange.bind(this)

  }



  findTrack(evt) {
    evt.preventDefault();
    // console.log(evt.target.userInput.value);

    // console.log(`find track`, this.state.trackTitle);
    let trackId
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
      evt.target.userInput.value}&page_size=4&page=1&s_track_rating=desc&apikey=${musixApi}`
    )
      .then(data => data.json())
      .then(resp => {
        this.setState({
          searchedTrack: resp.message.body,
        });
        // console.log(resp.message.body.track_list[0].track.track_id)
        trackId = resp.message.body.track_list[0].track.track_id
      })
      .catch(err => console.log(err));
    // console.log(trackId)
  }


  lyricFunc = (id, track, artist) => {
    // console.log(id, track)
    // send the onclick to Y
    // this.props.search(track)

    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${musixApi}`)
      .then(data => data.json())
      .then(async resp => {
        await this.setState({
          searchedLyrics: resp.message.body.lyrics.lyrics_body
        });
        this.searchYouTube(track, artist)

      })
      .catch(err => console.log(err));

  };


  searchYouTube = (term) => {
    YTSearch({ key: youTubeKey, term: term }, (data) => {
      try {
        console.log(data);
        this.setState({
          videos: data,
          video: data[0]
        });

        console.log(this.state.video);
      } catch (err) {
        alert(err.message)
      }
    });

  }


  trackChange(evt) {
    evt.preventDefault()
    this.setState({
      trackTitle:
        evt.target.value
    });
    // console.log(`my input`, this.state.trackTitle);
  };


  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

  render() {
    const { video } = this.state
    // console.log('this is the term', this.state.videos)


    let trackIdd = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_id
      ? this.state.searchedTrack.track_list[0].track.track_id
      : <Loading />;


    let trackNamee = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list[0].track.track_name
      ? null
      : <Loading />;


    // let videoSearch = video === null ? null : <YouTubeSearch 
    // video={video}
    // />



    let renderedLyrics = this.state.searchedTrack.track_list && this.state.searchedTrack.track_list.map(trackdata => {
      let { track_id, track_name, artist_name } = trackdata.track;
      // console.log('this is the track data', trackdata)
      return (
        <h2 className="clickasong"
          key={track_id}
          onClick={() => this.lyricFunc(track_id, track_name)}> {track_name} ~ <span className="artist-style"> {artist_name} </span>
        </h2>
      )
    })

    return (
      <div className="search-form">

        <YouTubeSearch
          video={video}
        />
        {/* <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> */}

        <form onSubmit={this.findTrack} >

          Name:
              <input
            type="text"
            name="userInput"
            placeholder="Track title..."
          />

          <button
            value="Submit"
          >SUBMIT</button>
        </form>


        {renderedLyrics}

        {/* <div className="clickasong">
          <h2 onClick={() => this.lyricFunc(trackIdd)}>{trackNamee} </h2>
        </div> */}

        <div className="lyric-box">
          <h4 className="lyricss">{this.state.searchedLyrics} </h4>
        </div>
        {/* {trackIdd} */}
        {trackNamee}
      </div>
    );
  }
}




export default SearchForm;